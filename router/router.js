const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")

router.post("/functionUp/college",collegeController.college)
router.post("/functionUp/interns",internController.interns)
router.get("/functionUp/collegeDetails",collegeController.collegeDetails)



module.exports=router

router.all("/*", (req, res) =>{
    res.status(404).send({ msg: "invalid http request" })
})