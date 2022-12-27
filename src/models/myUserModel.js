const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    "firstName" : String,
    "lastName" : String,
    "mobile" : Number,
    "emailId" : String,
    "password" : String,
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
        default : ["vinayak"]
    }
}, {timestamps : true})

module.exports = mongoose.model("thisUser", usersSchema);
