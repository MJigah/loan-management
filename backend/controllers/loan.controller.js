const Loan = require('../models/loan.model');

const createNewLoan = async (req, res) => {
    try {
        const newLoan = await Loan.create(req.body);
        res.send('You have requested for a loan');
    } catch (error) {
        res.status(500).send({message: 'A Server Error Occured!'})
        console.log(error)
    }

}

const getLoan = async (req, res) => {
    return res.send('Here!')
}

module.exports ={ 
    createNewLoan,
    getLoan,
}