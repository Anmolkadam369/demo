
const productsModel = require('../models/productsModel')
const ordersModel = require('../models/ordersModel');
const usersModel = require('../models/usersModel');

// Write a POST api to create a user that takes user details from the request body.
const createUsers = async function(req,res){
    const data = req.body;
    const isfreeappuser = req.headers.isfreeappuser;
    if(!isfreeappuser){
        res.send("isFreeAppUser is mandatory");
    }
    const names = req.body.name
    const created = await usersModel.create(data)
    const updateIsFreeAppUser = await usersModel.findOneAndUpdate({name : names},{$set :{isFreeAppUser : isfreeappuser} },{new:true});
    res.send({createUsers : updateIsFreeAppUser});
}
module.exports.createUsers = createUsers;
