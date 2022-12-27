const express = require('express');
const router = express.Router();
const userController= require("../controllers/myUserController")
const middelware = require ("../middleware/middelware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middelware.mid1, userController.getUserData)

router.put("/users/:userId", middelware.mid1, userController.updateUser)

router.delete("/users/:userId",middelware.mid1,userController.deleteUser)

// router.post ("/updatePost/:userId/post", middelware.mid1,userController.postMessage)
module.exports = router;