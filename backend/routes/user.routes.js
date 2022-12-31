const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/user.controller')

router.get('/', (req, res) => {
    res.send({message: 'Connected to User Route!'})
});

router.post('/signup', registerUser)

router.post('/login', loginUser)

module.exports = router;