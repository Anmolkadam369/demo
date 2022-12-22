const mongoose = require ('mongoose')


const bookSchema = new mongoose.Schema  ({ 
            authorName : String,
            age:Number,
            address : String,
            rating  : Number
        } , {timestamps : true})
    
module.exports = mongoose.model('RefAuthor', bookSchema)