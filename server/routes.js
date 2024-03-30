import express from 'express';
import MLOutput from './models/mlOutputModel.js';
import User from './models/userModel.js';

const router = express.Router();

const testRouter = async (req, res) => {
    const user = await User.findById('66080db053ff31bccb2fe7b7');
    res.json(user);
};

const testRouter2 = async (req, res) => {
    let fakeData = [true, false];
    const fakeMLOutput = {
        data: fakeData,
        createdAt: Date.now(),
    };
    const user = await User.findById('66080db053ff31bccb2fe7b7');
    // const fakeUser = {
    //     username: 'John Doe',
    //     email: 'abc@xyz.com',
    // };
    // const newEntry = new User(fakeUser);
    const newEntry = new MLOutput(fakeMLOutput);
    const ml_id = await newEntry.save();
    user.mlOutput.push(ml_id);
    await user.save();
    res.send('success');
};

const updateECG = async (req, res) => {
    res.send('ECG Update success');
};

const updateMLOutput = async (req, res) => {
    res.send('ML Output Update success');
};

router.route('/').get(testRouter).post(testRouter2);

router.route('/ecg').put(updateECG);

router.route('MLOutput').put(updateMLOutput);

export default router;
