const express = require('express')
const router = express.Router()
const Request = require('../models/requestSchema')
const {getRequests,deleteRequest} = require('../controllers/requestController')

router.post('/requests',jsonParser,async(req,res) => {
    const {ownerid,borrower_id,book_id,book_name,borrower_name} = req.body;
    try{
        const request=await Request.create({ownerid,borrower_id,book_id,book_name,borrower_name})
        res.status(200).json(request)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

router.get('/requests',getRequests)
router.delete('/requests/:id',deleteRequest)
module.exports = router;