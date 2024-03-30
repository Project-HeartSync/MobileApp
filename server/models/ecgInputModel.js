const mongoose = require('mongoose');

const ecgInputSchema = mongoose.Schema({
    data: {
        type: [Number],
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});

const ECGInput = mongoose.model('ECGInput', ecgInputSchema);

export default ECGInput;
