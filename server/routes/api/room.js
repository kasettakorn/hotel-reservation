const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = require('../../middleware/auth');
const Room = require('../../models/Room');

const { check, validationResult } = require('express-validator');

router.get('/', auth,  async(req, res) => {
    try {
        Room.find({}, function(err, rooms) {
    var roomMap = {};

    rooms.forEach(function(room) {
      roomMap[room._id] = room;
    });

    res.json(roomMap);  
  });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
})

router.post("/", async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }
    const { roomType, roomNo, price } = req.body;
    try {
        let room = await Room.findOne({ roomNo });
        if (room) {
            res.status(400).json({
                error: [{
                    msg: 'Room already exists'
                }]
            })
        }

        room = new Room({ roomType, roomNo, price });

        await room.save();

        res.json('Success')

    
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')
    }
})
module.exports = router;