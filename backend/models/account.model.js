const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    amount: {
        type: Number,
        default: 0.0,
    },
    date: {
        type: Date,
    },
    fee: {
        type: Number,
        default: 0.0,
    },
    transaction_type: {
        type: String,
        enum: ['withdraw, deposit'],
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' || 'Organization',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0.0,
    },
    openDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    transaction: [transactionSchema],
});

module.exports = mongoose.model('Account', accountSchema);