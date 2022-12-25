const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const usersController= require("../controllers/usersController")
const productsController= require("../controllers/productsController")
const ordersController = require ("../controllers/ordersController")
const commonMW = require ("../middlewares/commonMiddlewares");
const ordersModel = require('../models/ordersModel');
const usersModel = require('../models/usersModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// Write a POST api to create a product from the product details in request body. 
router.post ("/createProducts", productsController.createProducts)
// Write a POST api to create a user that takes user details from the request body.
router.post ("/createUser", usersController.createUsers)
// - Write a POST api for order purchase that takes a userId and a productId in request body. 
router.post("/createOrder",ordersController.createOrder)
// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)
router.get("/fetch", async function(req,res){
    const ans = await usersModel.find();
    res.send(ans)
})

module.exports = router;