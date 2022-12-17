//  Create a bookSchema with bookName, authorName, category and year .

const mongoose = require('mongoose');       
const bookSchema = new mongoose.Schema({    
        bookName :{ type : String, 
                    require: true,
                    unique : true
                },
        authorName : {type : String,
                      require : true
                        },
        category : String,
        year : Number
},{timestamps : true})
module.exports = mongoose.model('book', bookSchema);