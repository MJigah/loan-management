const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: true,
        default: 0.0,
    },
    loan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
    }
}, { timestamps: true });

module.exports = mongoose.model('Interest', interestSchema);