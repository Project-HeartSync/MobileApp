const mongoose = require('mongoose');
const express = require('express');
const MLOutput = require('./models/mlOutputModel');

const router = express.Router();

const testRouter = async (req, res) => {
    console.log('this works');
    res.send('hello world!');
};

const testRouter2 = async (req, res) => {
    let fakeData = [true, false];
    const fakeMLOutput = {
        data: fakeData,
        createdAt: Date.now(),
    };
    const newEntry = new MLOutput(fakeMLOutput);
    newEntry.save();
    res.send('success');
};

router.route('/').get(testRouter).post(testRouter2);

module.exports = router;
