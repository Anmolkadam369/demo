const bookModel = require('../models/bookModel')
const posting1 = async function(req,res){
    let postInfo = req.body;
    let savedBookInfo = await bookModel.create(postInfo);
    res.send({bookInformation : savedBookInfo});
}

const getting1 = async function(req,res){
    let getSavedInfo = await bookModel.find();
    res.send({wantedBookInformation : getSavedInfo});
}

module.exports.posting = posting1;
module.exports.getting = getting1;