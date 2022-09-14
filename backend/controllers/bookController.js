const Book = require('../models/bookSchema')
const mongoose=require('mongoose')

const getBooks = async (req,res) => {
    const books= await Book.find({}).sort({createdAt:-1})
    res.status(200).json(books);
}

const getBook = async(req,res) =>{
    const id = (req.params.id).trim()
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})
    }
    const book = await Book.findById(id)
    if(!book){
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json(user)
}

module.exports = {getBooks,getBook}