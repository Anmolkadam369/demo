const myBookModel = require('../models/myBookModel')
const myAuthorModel = require('../models/myAuthorModel')
const myPublisherModel = require('../models/myPublisherModel')


const createAuthor = async function (req,res){
    let data = req.body;
    let createdAuthor = await myAuthorModel.create(data);
    res.send(createdAuthor)
}


module.exports.createAuthor = createAuthor;