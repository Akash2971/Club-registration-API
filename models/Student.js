const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        min: 4,
        max: 255
    },
    regno: {
        type: Number,
        required: true,
        min: 10
    },
    dept: {
        type: String,
        required: true,
        min : 5,
        max: 255
    },
    tag : {
        type: String,
        required: true,
        min: 3,
        max: 10
    },
    domain : {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    mobile : {
        type: Number,
        required: true,
        min: 10,
    },
    email : {
        type: String,
        required: true,
        max: 255,
        min: 6
    }

})

module.exports = mongoose.model('Student',studentSchema);