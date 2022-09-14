const mongoose=require("mongoose");
const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },

    language:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    owner_id:{
        type:String,
        required:true
    }
})

const Book=mongoose.model('BOOK',bookSchema);

module.exports=Book;