const mongoose=require("mongoose");
const acceptSchema=new mongoose.Schema({
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
    owner_name:{
        type:String,
        required:true
    },
    borrower_name:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    }
})

const Accept=mongoose.model('ACCEPT',acceptSchema);

module.exports=Accept;