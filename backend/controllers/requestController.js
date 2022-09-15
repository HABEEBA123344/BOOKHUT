const Book = require('../models/bookSchema')
const Request = require('../models/requestSchema')
const mongoose=require('mongoose')

const getRequests = async (req,res) => {
    const requests= await Request.find({}).sort({createdAt:1})
    res.status(200).json(requests);
}

module.exports = {getRequests}