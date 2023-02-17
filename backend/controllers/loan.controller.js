const Loan = require('../models/loan.model');
const User = require('../models/user.model');

const createNewLoan = async (req, res) => {
    try {
        const { 
        fullname,
        email,
        membershipNumber,
        homeAddress,
        homeNumber,
        workNumber,
        employerNumber,
        department,
        employerAddress,
        employmentTerm,
        loanAmount,
        duration,
        loanStart,
        loanPurpose,
        interest,
        monthlyPayment,
        accountName,
        accountNumber,
        salary,
        mortgage,
        assetValue } = req.body;
        const checkUser = User.findOne({email: email});
        if(!checkUser){
            res.status(500).send({message: 'User not Registered!!'})
        }
        const createdData = {
            personalDetails: {
                id: checkUser._id,
                full_name: fullname,
                email: email,
                membership_number: membershipNumber,
                home_address: homeAddress,
                home_number: homeNumber,
                work_number: workNumber,
            },
            employmentDetails: {
                employer_number: employerNumber,
                department: department,
                employer_address: employerAddress,
                employment_term: employmentTerm
            },
            loanDetails: {
                loan_balance: parseInt(monthlyPayment),
                duration: parseInt(duration),
                loan_start: loanStart,
                loan_amount: parseInt(loanAmount),
                interest: parseInt(interest),
                loan_purpose: loanPurpose
            },
            salaryDetails: {
                account_name: accountName,
                account_number: accountNumber,
                salary: salary,
                mortgage: mortgage,
                asset_value: assetValue
            }
        }
        const newLoan = await Loan.create(createdData);
        if(!newLoan){
            res.status(400).send({message: 'Invalid Details'});
        }
        res.status(200).send({message: 'Loan Request Successful!'});
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