const mongoose = require('mongoose');

const mlOutputSchema = mongoose.Schema(
    {
        data: {
            type: [Boolean],
            required: true,
        },
        // createdAt: {
        //     type: Date,
        //     required: true,
        // },
    },
    { timestamps: true }
);

const MLOutput = mongoose.model('MLOutput', mlOutputSchema);

module.exports = MLOutput;
