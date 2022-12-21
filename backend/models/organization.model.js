const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true});

module.exports = mongoose.model('Organization', organizationSchema);