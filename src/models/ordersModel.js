const mongoose = require ('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema({
    userId:{
        type : ObjectId,
        ref : "userMe"
    },
	productId:{
        type :  ObjectId,
        ref : "ProductsMe"
    },
	amount: Number,
	isFreeAppUser: {
        type : Boolean
    }, 
	date: Date
})
module.exports = mongoose.model('OrdersMe', orderSchema)