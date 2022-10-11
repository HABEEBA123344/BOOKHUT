const express = require('express')
const {getBooks,getBook,deleteBook}=require('../controllers/bookController')
const router = express.Router()
const Book = require('../models/bookSchema')
const mongoose = require('mongoose')

router.post('/books',jsonParser,async(req,res) => {
    const {name, author, language, category,status,owner_id} = req.body;
    try{
        const book=await Book.create({name, author, language, category,status,owner_id})
        res.status(200).json(book)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})
router.post('/books/:id',jsonParser,async(req,res)=>{
    const id=req.params['id']
    const status=req.body.status
    console.log(id);
    console.log(status)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such book'})
    }
    const book=await Book.findOneAndUpdate({_id:id},{$set:{status:status}})

    if(!book){
        return res.status(400).json({error:'No such book'})
    }
    res.status(200).json({message:'updated'})
})
router.get('/books',getBooks)
router.get('/books/:id',getBook)
router.delete('/books/:id',deleteBook)

module.exports = router;