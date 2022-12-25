const usersmodel = require('../models/usersModel')
const productsModel = require('../models/productsModel')
const ordersModel = require('../models/ordersModel')

const createProducts = async function(req,res){
    const data = req.body;
    const productCreated = await productsModel.create(data);
    res.send({productCreated : productCreated});
}
module.exports.createProducts = createProducts;
