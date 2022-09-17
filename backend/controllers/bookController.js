const Book = require('../models/bookSchema')
const User = require('../models/userSchema')
const mongoose=require('mongoose')

const getBooks = async (req,res) => {
    const books= await Book.find({}).sort({createdAt:-1})
    res.status(200).json(books);
}

const getBook = async(req,res) =>{
    const id=req.params['id']
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such book'})
    }
    const book = await Book.findById({_id:id})
    const user = await User.findById({_id:book.owner_id})
    if(!user){
        return res.status(404).json({error:'No such book'})
    }
    res.status(200).json({user})
}

const deleteBook=async(req,res)=>{
    const id=req.params['id']
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such book'})
    }
    const book=await Book.findOneAndDelete({_id:id})

    if(!book){
        return res.status(400).json({error:'No such book'})
    }
    res.status(200).json(book)
}

module.exports = {getBooks,getBook,deleteBook}