const mongoose = require ('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema  ({ 
            name:String,
            author:{
                type: ObjectId,
                ref : 'RefAuthor'
            },
            price:Number,
            ratings:Number,
            publisher: {
                type: ObjectId,
                ref : 'RefPublisher'
            },
            isHardCover : {
                 type : Boolean,
                 default : false
            }
        } , {timestamps : true})
    
module.exports = mongoose.model('RefBook', bookSchema)
        




























//mongoose.Schema.Types.Mixed

// const student = new mongoose.Schema  ({ 
//     name : String,
//     age : Number,
//     isdeleted : {
//         type : Boolean,
//         default : false
//     }
// }, {timestamps : true})


// let createdStudent = await studentModel.create((data));
// let getStudent = await studentModel.find();
// let updateStudent = await studentModel.findOneAndUpdate(
//     {"name ": "rakesh"},
//     {$set : {age : 12}}
// )
// let DeleteStudent = await studenModel.findOneAndUpdate(
//     {"name ": "rakesh"},
//     {$set : {isdeleted : true}}
// )



