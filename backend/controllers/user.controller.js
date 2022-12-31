const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs');
const { generateToken } = require("../middlewares/token.middleware");

const registerUser = async (req, res) => {
    try {
        const { email, firstname: firstName, lastname: lastName, address, postal_code: postalCode, dob: DOB, home_no: homeNumber, work_no: workNumber, password } = req.body;
        const checkUser = await userModel.findOne({email});
        if(checkUser){
            res.send({message: 'User already exists!'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(password, salt);
    
        const newUser = await userModel.create({
            email,
            firstName,
            lastName,
            address,
            postalCode,
            DOB,
            homeNumber,
            workNumber,
            password: hashedPassword
        });
        if(!newUser){
            console.log(newUser)
            res.send({message: 'User Registration Failed!'})
        }
        res.send({message: 'User Registered Successfully!', token: generateToken(newUser._id)})
    } catch (error) {
        res.status(500).send({message: 'A Server Error Occured!'})
        console.log(error)
    }

};

const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body;
        const checkUser = await userModel.findOne({ email });
        if(!checkUser){
            res.status(500).send({message: 'User does not exist!'})
        }
        if(checkUser && (bcrypt.compare(password, checkUser.password))){
            res.status(200).send({
                message: 'Sign in Successful!',
                token: generateToken(checkUser._id)
            })
        } else {
            res.status(400).send({message: 'Invalid Login Details'});
        }
    } catch (error) {
        res.status(500).send({message: 'A Server Error Occured!'})
        console.log(error)
    }
}

module.exports = {
    registerUser,
    loginUser,
}