const express=require('express');
const router=express.Router();
const jwt=require("jsonwebtoken");
require('../db/conn');
const User = require("../models/userSchema");
const Book = require("../models/bookSchema");

router.get('/', (req, res) => {
    res.send('hello world from router js');
  });

//register route
router.post('/register', jsonParser , async(req,res)=>{
  const { name, email, phone, password, department,year} = req.body;

  if(!name || !email || !phone || !department || !year|| !password){
    return res.status(422).json({error:"Plz fill the field properly"});
  }
  try{
    const userExist = await User.findOne({email:email});

    if(userExist){
      return res.status(422).json({error:"Email already exist"});
    }
    const user = new User({name, email,password, phone,department,year });
    const userRegister = await user.save();
    if(userRegister){
      res.status(201).json({message:"User registered successfully"});
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
    
    if(userLogin){
        res.status(201).json({message:"User login successfully"});
      
    }else{
      res.status(400).json({error:"Invalid credentials"});
    }
  }catch(err){
    console.log(err);
  }
});



module.exports=router;
