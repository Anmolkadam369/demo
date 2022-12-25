

const productsModel = require('../models/productsModel')
const ordersModel = require('../models/ordersModel');
const usersModel = require('../models/usersModel');

// - Write a POST api for order purchase that takes a userId and a productId in request body. 
const createOrder = async function (req,res){
    const data = req.body;
    const isFreeAppUser = req.headers.isfreeappuser
    const user_id = req.body.userId;
    const product_id = req.body.productId;

    if(!user_id){
        res.send("User Id is not in your Body");
    }
    findinguser_id = await usersModel.findOne({_id : user_id})
    if (!findinguser_id){
        res.send("User id is not present in the DB ")
    }

    if(!product_id){
        res.send("Product Id is not in your Body");
    }
    findingproduct_id = await productsModel.findOne({_id : product_id})
    if(!findingproduct_id){
        res.send("Product Id is not present in the DB")
    }
    if(isFreeAppUser == "false"){
       const proID = await productsModel.findById(req.body.productId)
       const usrID = await usersModel.findById(req.body.userId)
       if(usrID.balance >= proID.price){
        const updatedBalance = await usersModel.findByIdAndUpdate(data.userId,{$inc : {balance:-proID.price}})
        data.amount = proID.price
        data.isFreeAppUser = false
        const created = await ordersModel.create(data);
        res.send({msg : created})
       }
       else{
        res.send("insufficient balance")
       }
    }
    else{
        data.amount=0;
        data.isFreeAppUser=true
        const created = await ordersModel.create(data);
        res.send({msg : created})
    }  
}


module.exports.createOrder = createOrder;


