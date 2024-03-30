import express from 'express';
import MLOutput from './models/mlOutputModel.js';
import ECGInput from './models/ecgInputModel.js';
import User from './models/userModel.js';

const router = express.Router();

const MAX_ECG_INPUT_LENGTH = 10;
const MAX_ML_OUTPUT_LENGTH = 10;

const updateECG = async (req, res) => {
    let ECGdata = req.body.data;
    const ecgObj = {
        data: ECGdata,
    };
    const user = await User.findById(req.body.userid);
    const newEntry = new ECGInput(ecgObj);
    const ecg_id = await newEntry.save();
    user.ecgReadings.push(ecg_id);
    let oldReading = '';
    if (user.ecgReadings.length > MAX_ECG_INPUT_LENGTH) {
        oldReading = user.ECGReadings[0];
        user.ecgReadings.shift();
    }
    await user.save();
    if (oldReading !== '') {
        await ECGInput.deleteOne({_id: oldReading});
    }
    res.send('ECG Update success');
};

const updateMLOutput = async (req, res) => {
    let MLdata = req.body.data;
    const output = {
        data: MLdata,
    };
    const user = await User.findById(req.body.userid);
    const newEntry = new MLOutput(output);
    const ml_id = await newEntry.save();
    user.mlOutput.push(ml_id);
    let oldOutput = '';
    if (user.mlOutput.length > MAX_ML_OUTPUT_LENGTH) {
        oldOutput = user.mlOutput[0];
        user.mlOutput.shift();
    }
    await user.save();
    if (oldOutput !== '') {
        await MLOutput.deleteOne({_id: oldOutput});
    }
    res.status(200).send('ML Output Update success');
};

router.route('/ecg').put(updateECG);

router.route('/MLOutput').put(updateMLOutput);

export default router;
