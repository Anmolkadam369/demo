const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    bookName : {
        type : String,
        require : true
    },
    tags : [String],
    auterName : String,
    totalPages : Number,
    stockAvailable : Boolean,
    price : {
        indianPrice : String,
        europeanPrice : String
    },
    year : {
        type : Number,
        default : 2021 
    }
}, {timestamps:true});

module.exports = mongoose.model("Book",bookSchema)
 //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
