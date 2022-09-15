const express = require('express')
const router = express.Router()
const Request = require('../models/requestSchema')
const {getRequests} = require('../controllers/requestController')

router.post('/requests',jsonParser,async(req,res) => {
    const {ownerid,borrower_id,book_id} = req.body;
    console.log(ownerid)
    try{
        const request=await Request.create({ownerid,borrower_id,book_id})
        res.status(200).json(request)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

router.get('/requests',getRequests)
module.exports = router;