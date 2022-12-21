const express = require('express');
const router = express.Router();
const customercardController= require("../controllers/customercardController")

router.post("/createCustomer", customercardController.createCustomer)

router.post("/createCard", customercardController.createCard)


module.exports = router;



















// router.post("/Books",bookController.books)

// router.post("/authors", bookController.authors)

// router.get("/getBooksData", bookController.getBooksData)
// router.get ("/findAuthor", bookController.findAuthor)
// router.get ("/priceOfBooks", bookController.priceOfBooks)
// router.post("/updateBooks", BookController.updateBooks)















const UserController= require("../controllers/userController");
const { Router } = require('express');
const cardModel = require('../models/cardModel');
const customerModel = require('../models/customerModel');
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })
