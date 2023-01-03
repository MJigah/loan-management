const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const secret = process.env.JWT_SECRET || 'abc123';

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET || 'abc123', {
        expiresIn: '30d'
    });
}

const protect = async(req, res, next) => {
    var token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //Get token from header
            token = req.headers.authorization.split(' ')[1]

            //Verify token
            const decoded = jwt.verify(token, secret)

            //Get user from the token
            req.user = await userModel.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
}

module.exports = {
    generateToken,
    protect,
}