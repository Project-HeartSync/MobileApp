const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    dependants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    ecgReadings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ECGInput',
        },
    ],
    mlOutput: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MLOutput',
        },
    ],
});

const User = mongoose.model('User', userSchema); // Create User model

module.exports = User;
