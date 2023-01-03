const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserDetails } = require('../controllers/user.controller');
const { protect } = require('../middlewares/token.middleware');

router.get('/', protect, getUserDetails)

router.post('/signup', registerUser)

router.post('/login', loginUser)

module.exports = router;