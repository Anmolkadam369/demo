const express = require('express');
const router = express.Router();
const authController=require('../controllers/authorController')
const blogController=require('../controllers/blogController')
const middleware  = require("../middlewares/commonMiddleware")
router.post('/authors',authController.createAuthor)
router.post('/login',authController.login)
router.post('/blogs',middleware.tokenChk, blogController.createBlog)
router.get("/getBlogs", middleware.tokenChk,blogController.getBlogs)
router.put("/blogs/:blogId",middleware.tokenChk, blogController.update)
router.delete("/blogs/:blogId",middleware.tokenChk,blogController.deleteData)
router.delete("/blog",middleware.tokenChk,blogController.deleteDataWithQuery)
module.exports=router

router.all("/*", (req, res) =>{
    res.status(404).send({ msg: "invalid http request" })
})