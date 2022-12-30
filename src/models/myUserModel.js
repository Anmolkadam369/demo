const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    "firstName" : String,
    "lastName" : String,
    "mobile" : Number,
    "emailId" : {
        type : String,
        required : true
    },
    "password" :{
        type : String,
        required : true
    },
    "gender" : {
        type : String,
        enum : ["male","female","others"]
    },
	"isDeleted":{
        type : Boolean,
        default : false
    }, //default value is false 
    "age" : Number,
    "post" : {
        type : [],
        default : []
    }
}, {timestamps : true})

module.exports = mongoose.model("thisUser", usersSchema);
