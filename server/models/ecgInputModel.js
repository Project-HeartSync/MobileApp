import mongoose from 'mongoose';

const ecgInputSchema = mongoose.Schema(
    {
        data: {
            type: [Number],
            required: true,
        },
        // createdAt: {
        //     type: Date,
        //     required: true,
        // },
    },
    { timestamps: true }
);

const ECGInput = mongoose.model('ECGInput', ecgInputSchema);

module.exports = ECGInput;
