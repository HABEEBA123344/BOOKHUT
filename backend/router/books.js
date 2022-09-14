const express = require('express')
const {getBooks,getBook}=require('../controllers/bookController')
const router = express.Router()
const Book = require('../models/bookSchema')

router.post('/books',jsonParser,async(req,res) => {
    const {name, author, language, category,status,owner_id} = req.body;
    try{
        const book=await Book.create({name, author, language, category,status,owner_id})
        res.status(200).json(book)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})
router.get('/books',getBooks)
router.get('/:id',getBook)

module.exports = router;