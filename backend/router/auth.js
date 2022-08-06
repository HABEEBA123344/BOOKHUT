const express=require('express');
const router=express.Router();

require('../db/conn');
const User = require("../models/userSchema");
const Book = require("../models/bookSchema");

router.get('/', (req, res) => {
    res.send('hello world from router js');
  });

//register route
router.post('/register', jsonParser , async(req,res)=>{
  const { name, email, phone, cls, password} = req.body;

  if(!name || !email || !phone || !cls || !password){
    return res.status(422).json({error:"Plz fill the field properly"});
  }
  try{
    const userExist = await User.findOne({email:email});
    if(userExist){
      return res.status(422).json({error:"Email already exist"});
    }
    const user = new User({name, email, phone, cls, password});
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

// addbook route
router.post('/addbook', jsonParser , async(req,res)=>{
  const { name, author, language, category} = req.body;

  if(!name || !author || !language || !category){
    return res.status(422).json({error:"Plz fill the field properly"});
  }
  try{

    const book = new Book({name, author, language, category});
    const bookAdd = await book.save();
    if(bookAdd){
      res.status(201).json({message:"Book added successfully"});
    }else{
      res.status(500).json({error:"Failed to add"});
    }
  }
  catch(err){
    console.log(err);
  }});

router.get('/profile',(req,res) => {
  console.log("Hello my about");
  res.send(req.User);
});
module.exports=router;