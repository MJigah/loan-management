const mongoose = require('mongoose');

 const personalDetails = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    membership_number: {
        type: String,
        required: true,
    },
    home_address: {
        type: String,
        required: true,
    },
    home_number: {
        type: String,
        required: true,
    },
    work_number: {
        type: String,
        required: true,
    },
 })
 const employmentDetails = new mongoose.Schema({
    employer_number: {
        type: String,
        required: true,
    },
    department: {
        type: String    
    },
    employer_address: {
        type: String,
    },
    employment_term: {
        type: String,
    }
 })

 const loanDetails = new mongoose.Schema({
    loan_balance: {
        type: Number,
        required: true,
        default: 0.0,
    },
    duration: {
        type: Number,
        required: true,
        default: 0,
    },
    loan_start: {
        type: String,
        required: true,
        default: Date.now().toString(),
    },
    loan_end: {
        type: String,
        required: true,
        default: Date.now().toString(),
    },
    loan_amount: {
        type: Number,
        required: true,
        default: 0.0,
    },
    interest: {
        type: Number,
        required: true,
        default: 0.0,
    },
    loan_purpose: {
        type: String,
        required: true,
    },
 })
 const salaryDetails = new mongoose.Schema({
    account_name: {
        type: String,
        required: true,
    },
    account_number: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    mortgage: {
        type: String,
        required: true,
    },
    asset_value: {
        type: String,
        required: true,
    }
 })

const loanSchema = new mongoose.Schema({
    personalDetails,
    employmentDetails,
    loanDetails,
    salaryDetails,
    loan_approved: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);