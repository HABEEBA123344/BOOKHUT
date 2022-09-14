const express=require('express');
const router=express.Router();
const jwt=require("jsonwebtoken");
const validator=require('validator')
require('../db/conn');
const User = require("../models/userSchema");
const {
  createToken
} = require('../controllers/usercontroller')
router.get('/', (req, res) => {
    res.send('hello world from router js');
  });

//register route
router.post('/register', jsonParser , async(req,res)=>{
  const { name, email, phone, password, department,year} = req.body;

  if(!name || !email || !phone || !department || !year|| !password){
    return res.status(422).json({error:"Please fill the field properly"});
  }
  if(!validator.isStrongPassword(password)){
    return res.status(422).json({error:"Password not strong enough"});
  }
  try{
    const userExist = await User.findOne({email:email});

    if(userExist){
      return res.status(422).json({error:"Email already exist"});
    }
    const user = new User({name, email,password, phone,department,year });
    const token= createToken(user._id)
    const userRegister = await user.save();
    if(userRegister){
      res.status(201).json({message:"User registered successfully",token,name,email});
    }else{
      res.status(500).json({error:"Failed to register"});
    }
  }
  catch(err){
    console.log(err);
  }});
    
//login route
router.post('/login',jsonParser ,async(req,res)=>{
  try{
    const {email, password} = req.body;
    if(!email || !password){
      return res.status(400).json({error:"Plz fill the data"});
    }

    const userLogin = await User.findOne({email:email, password: password});
    const token= createToken(userLogin._id)
    if(userLogin){
        res.status(201).json({message:"User login successfully",token,id:userLogin._id,name:userLogin.name,email:userLogin.email,phone:userLogin.phone,depart:userLogin.department,year:userLogin.year});
      
    }else{
      res.status(400).json({error:"Invalid credentials"});
    }
  }catch(err){
    console.log(err);
  }
});



module.exports=router;
