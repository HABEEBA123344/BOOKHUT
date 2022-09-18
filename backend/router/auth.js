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

  if(!name || !email || !phone || !department || !year|| !password||phone.length!=10){
    return res.status(422).json({error:"Please fill the field properly"});
  }
  if(!validator.isStrongPassword(password)){
    return res.status(422).json({error:"Password should contain atleast 8 characters(Atleast 1 uppercase letter,1 lowercase letter,1 number and 1 special character)"});
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
    // const token= createToken(userLogin._id)
    if(userLogin){
        res.status(201).json({message:"User login successfully",id:userLogin._id,name:userLogin.name,email:userLogin.email,phone:userLogin.phone,depart:userLogin.department,year:userLogin.year});
      
    }else{
      res.status(400).json({error:"Invalid credentials"});
    }
  }catch(err){
    console.log(err);
  }
});



module.exports=router;
