const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const userModel = require('../models/userModel.js');

const bookModel = require('../models/bookModel');
const bookController = require('../controllers/bookController');
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//---------------------------------------------------------------------------------------------------------------------------------------------------

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
//---------------------------------------------------------------------------------------------------------------------------------------------------
// On similar lines as above(today’s mongodb session APIs), complete this assignment and submit explainer video for the same :
//  Create a bookSchema with bookName, authorName, category and year .
//  Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 

router.post ('/books-post', bookController.posting);

router.get ('/books-get', bookController.getting);


module.exports = router;
