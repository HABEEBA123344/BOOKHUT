const express=require("express")
const router=express.Router()
const Book = require('../models/bookSchema')

router.post('/search',jsonParser,async(req,res)=>{
    const {type,query}=req.body
    try{
        let books;
        switch(type){
            case 'text':
                books=await Book.find({name:query})
                if(!books.length>0){
                    books= await Book.find({author:query})
                }
                break;
            case 'category':
                books=await Book.find({category:query})
                break;
            
        }
        if(!books.length>0){

            books= await Book.find({}).sort({createdAt:1})
            res.json({books,message:"Book not found"})
        }
        else{
            res.json({books})
        }
    }
    catch(error){
        res.status(400).json({error:"Error"})
    }
})

module.exports=router
