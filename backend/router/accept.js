const express = require('express')
const router = express.Router()
const Accept = require('../models/acceptSchema')
const mongoose=require('mongoose')

router.post('/accepts',jsonParser,async(req,res) => {
    const {ownerid,borrower_id,book_id,book_name,owner_name,borrower_name,dueDate} = req.body;
    try{
        const accept=await Accept.create({ownerid,borrower_id,book_id,book_name,owner_name,borrower_name,dueDate})
        res.status(200).json(accept)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})
const getAccepts = async (req,res) => {
    const accepts= await Accept.find({}).sort({createdAt:1})
    res.status(200).json(accepts);
}
const deleteAccept=async(req,res)=>{
    const id=req.params['id']
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such request'})
    }
    const accept=await Accept.findOneAndDelete({_id:id})

    if(!accept){
        return res.status(400).json({error:'No such request'})
    }
    res.status(200).json(accept)
}
router.get('/accepts',getAccepts)
router.delete('/accepts/:id',deleteAccept)
module.exports = router;