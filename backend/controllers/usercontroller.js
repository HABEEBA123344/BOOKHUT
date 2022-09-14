const User = require('../models/userSchema')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn : '3d'})
}

module.exports = {createToken}

