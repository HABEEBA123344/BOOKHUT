const User = require('../models/userSchema')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn : '3d'})
}

const getUsers = async (req,res) => {
    const users= await User.find({})
    res.status(200).json(users);
}

const getUser = async(req,res) =>{
    const id = (req.params.id).trim()
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})
    }
    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json(user)
}

module.exports = {getUsers,getUser,createToken}

