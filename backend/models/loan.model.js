const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    loan_balance: {
        type: Number,
        required: true,
        default: 0.0,
    },
    loan_start: {
        type: Date,
        required: true,
    },
    loan_end: {
        type: Date,
        required: true,
    },
    loan_amount: {
        type: Number,
        required: true,
        default: 0.0,
    },
    monthly_payment: {
        type: Number,
        default: 0.0,
    },
    loan_approved: {
        type: Boolean,
        required: true,
        default: false,
    },
    loan_discount: {
        type: Number,
        required: true,
        default: 0.0,
    },
    date_applied: {
        type: Date,
        required: true,
        default: Date.now(),
    }
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);