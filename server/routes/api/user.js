const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();

const { check, validationResult } = require("express-validator");
const User = require("../../models/User");

router.post("/", [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please invalid').isEmail(),
    check('password', 'No password').isLength({min: 8})
], async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({
                error: [{
                    msg: 'User already exists'
                }]
            })
        }
        const avatar = gravatar.url(email, {
            s:'200',
            r:'pg',
            d:'mm'
        })
        user = new User({ name, email, avatar, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            res.json({token})
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')
    }
})

module.exports = router;