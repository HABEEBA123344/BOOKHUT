const Request = require('../models/requestSchema')
const mongoose=require('mongoose')

const getRequests = async (req,res) => {
    const requests= await Request.find({}).sort({createdAt:1})
    res.status(200).json(requests);
}

const deleteRequest=async(req,res)=>{
    const id=req.params['id']
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such request'})
    }
    const request=await Request.findOneAndDelete({_id:id})

    if(!request){
        return res.status(400).json({error:'No such request'})
    }
    res.status(200).json(request)
}
module.exports = {getRequests,deleteRequest}