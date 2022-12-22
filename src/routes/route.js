const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController");
const { rawListeners } = require('../models/authorModel');
const myAuthorController = require("../controllers/myAuthorController")
const myBookController = require("../controllers/myBookController")
const myPublisherController = require("../controllers/myPublisherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", myAuthorController.createAuthor)

router.post("/createPublisher", myPublisherController.createPublisher)

router.post("/createBook", myBookController.createBook)

router.get("/getBooks", myBookController.getBooks)

router.put("/selectedPublisher",myPublisherController.selectedPublisher)

router.put ("/selectedMyPublisher", myPublisherController.selectedMyPublisher)

module.exports = router;





























// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)