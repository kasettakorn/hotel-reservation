const mongoose = require('mongoose');
const { ObjectId, String, Number } = mongoose.Schema.Types;
const RoomSchema = new mongoose.Schema({
    roomType: {
        type: String
    },
    roomNo: {
        type: Number
    },
    price: {
        type: Number
    },
    createDate: {
        type: mongoose.Schema.Types.Date,
        default: Date.now
    }
})

module.exports = Room = mongoose.model('room', RoomSchema);