const { count } = require("console")
const { request } = require("http")
const cardModel = require("../models/cardModel")
const customerModel = require("../models/customerModel")

const createCustomer = async function(req,res){
    const data = req.body;
    const createdCustomer = await customerModel.create(data);
    res.send(createdCustomer)
}

const createCard = async function(req,res){
    const data = req.body;
    const createdCard = await cardModel.create(data);
    res.send(createdCard)
}




module.exports.createCustomer=createCustomer;
module.exports.createCard=createCard;
































// const authors = async function (req, res) {
//     let data= req.body
//     let Author= await authorModel.create(data)
//     res.send({msg: Author}) 
// }

// const books = async function (req, res) {
//     let data= req.body
//     let book= await bookModel.create (data)
//     res.send({msg: book})
// }

// //List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- 
// //first query will find the author_id for "Chetan Bhagat”.
// // Then next query will get the list of books with that author_id )
// const getBooksData = async function(req,res){
//     let result =await authorModel.find({author_name : "Chetan Bhagat"}).select({"author_id":1, "_id":0});
//     const yes =result.pop();
//     let ans = await bookModel.find({author_id: {$eq : yes.author_id}})
//     res.send({msg : ans})
// }

// // find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.
// //   ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
// const findAuthor = async function(req,res){
//     let ourAuthorsID = await bookModel.findOneAndUpdate({name : "Two states"},{$set : {price : 100}}, {new : true}).select({author_id : 1, _id : 0})
//     let author = await authorModel.find({author_id : {$eq : ourAuthorsID.author_id}})
//     res.send({msg : author})
// }

// // Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// // bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// // bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding
// // to the authorId’s ( by querying authorModel)
// const priceOfBooks= async function(req,res){
//     let ourAuthorsbook= await bookModel.find({price:{$gte:50, $lte:100}})
//     let id = ourAuthorsbook.map(x=>x.author_id)
//  let authorName = await authorModel.find({author_id:id}).select({author_name:1,_id:0})
//  res.send({msg:authorName})
//  }

// module.exports.authors=authors 
// module.exports.books=books
// module.exports.getBooksData=getBooksData;
// module.exports.findAuthor = findAuthor;
// module.exports.priceOfBooks = priceOfBooks;















// const { count } = require("console")
// const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
