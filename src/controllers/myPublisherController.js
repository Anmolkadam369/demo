const myBookModel = require('../models/myBookModel')
const myAuthorModel = require('../models/myAuthorModel')
const myPublisherModel = require('../models/myPublisherModel')


const createPublisher = async function (req,res){
    let data = req.body;
    let createdPublisher = await myPublisherModel.create(data);
    res.send(createdPublisher)
}

//Add a new boolean attribute in the book schema called isHardCover with a default false value. 
//For the books published by 'Penguin' and 'HarperCollins', update this key to true.
const selectedMyPublisher = async function (req, res){
     let answer = await myPublisherModel.find({name : {$in : ['Penguin','HarperCollins']}});
     const ids = answer.map(x=>x._id);
     const answer2 = await myBookModel.updateMany({publisher : {$in: ids}},{$set : {isHardCover : true}})


    res.send({msg : answer2})

}



// For the books written by authors having a rating greater than 3.5,
 //update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
 const selectedPublisher = async function (req,res){
const selectedPublishers = await myBookModel.updateMany({ rating: { $gt: 3.5 } }, { $inc: { price: 10 }},{new: true});
res.send(selectedPublishers)
 }

module.exports.createPublisher = createPublisher;
module.exports.selectedPublisher = selectedPublisher;
module.exports.selectedMyPublisher = selectedMyPublisher;
