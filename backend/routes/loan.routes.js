const express = require('express');
const router = express.Router();
const { createNewLoan, getLoan} = require('../controllers/loan.controller');
const { protect } = require('../middlewares/token.middleware');

router.get('/', getLoan)

router.post('/', createNewLoan)

module.exports = router;