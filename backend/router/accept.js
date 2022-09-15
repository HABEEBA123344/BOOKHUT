const express = require('express')
const router = express.Router()
const Accept = require('../models/acceptSchema')

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
    const accepts= await Accept.find({}).sort({createdAt:-1})
    res.status(200).json(accepts);
}
router.get('/accepts',getAccepts)
module.exports = router;