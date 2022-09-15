const mongoose=require("mongoose");
const requestSchema=new mongoose.Schema({
    ownerid:{
        type:String,
        required:true
    },
    borrower_id:{
        type:String,
        required:true
    },
    book_id:{
        type:String,
        required:true
    },
    book_name:{
        type:String,
        required:true
    },
    borrower_name:{
        type:String,
        required:true
    }
})

const Request=mongoose.model('REQUEST',requestSchema);

module.exports=Request;