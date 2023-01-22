const mongoose = require('mongoose')
const jwt = require ("jsonwebtoken");
const blogModel = require('../modules/blogModel');

const createBlog = async function (req, res) {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0)  return res.status(400).send({ msg: "no data" });
        if (!data.title) return res.status(400).send({ status: false, msg: "No title" });
        data.title = data.title.trim();
        if (!data.body) return res.status(400).send({ status: false, msg: "No body" });
        data.body = data.body.trim();
        if (!data.authorId) return res.status(400).send({ status: false, msg: "No authorId" });
        data.authorId = data.authorId.trim();
        if (!data.category) return res.status(400).send({ status: false, msg: "No category" });
        data.category = data.category.trim();
        console.log(data.authorId , " , ", req.authorId)
        if (data.authorId !== req.authorId) return res.status(401).send({ status: "not authorized" });
        if (data.isPublished === true) data.publishedAt = Date.now();
        let saveData = await blogModel.create(data);
        res.status(201).send({ msg: saveData })}
    catch (err) {res.status(500).send({ err: err.message })}}

const getBlogs = async function (req, res) {
    try {
        if (req.query.authorId) {if (!mongoose.isValidObjectId(req.query.authorId))return res.status(400).send({ msg: "not valid authorId" })}
        let blogFound = await blogModel.find(req.query)
        let arr = [];
        for (let i = 0; i < blogFound.length; i++) {
            if (blogFound[i].isDeleted == false && blogFound[i].isPublished == true) arr.push(blogFound[i]);
        }
        if (arr.length > 0) res.status(200).send({ status: true, data: arr });
         else res.status(404).send({ status: false, msg: "no blog found" })}
    catch (err) {res.status(500).send({ err: err.message })}
}

const update = async function (req, res) {
    try {
        let data = req.body;
        let blogId = req.params.blogId;
        if (Object.keys(data).length === 0) return res.status(400).send({ msg: "No data for Update" })
        if (!mongoose.isValidObjectId(blogId)) return res.status(400).send({ status: false, message: "Please enter valid blogid" })
        let findblog = await blogModel.findById(blogId)
        if (!findblog) return res.status(404).send({ msg: "blogid is not found" })
        //console.log("findblog.authorId._id: ",findblog.authorId._id.toString() ,", ", req.authorId)
        if (findblog.authorId._id.toString() !== req.authorId) return res.status(403).send({ Status: false, message: "Authorisation Failed" })
        if (findblog.isDeleted == true) return res.status(400).send({ msg: "Blog is already deleted" })
            let updatedBlog = await blogModel.findOneAndUpdate({ _id: blogId }, {
                $set: {title: data.title,body: data.body,category: data.category,publishedAt: Date.now(),isPublished: true},
                $push: {tags: data.tags,subcategory: data.subcategory}}, { new: true, upsert: true })
            return res.status(200).send({status:true, msg: updatedBlog})
    }
    catch (err) {res.status(500).send({ err: err.message })}
}

const deleteData = async function (req, res) {
   try{ let blogId = req.params.blogId;
    console.log("blogId : ",blogId)
    let isValid = mongoose.Types.ObjectId.isValid(blogId)
    if (!isValid) return res.send("Object id isn't valid")
    let isPresentBlogId = await blogModel.findOne({_id:blogId, isDeleted:false});
    console.log("isPresent : ", isPresentBlogId)
    if (!isPresentBlogId ) return res.send({msg : "No document with this ID"})
    if (isPresentBlogId.authorId._id.toString() != req.authorId) return res.status(403).send({ msg: "authorization failed" })
    let deleteDocument = await blogModel.updateOne({ _id: blogId }, { isDeleted: true, deletedAt: Date.now() }, { new: true });
    if (deleteDocument) res.status(200).send({ status:true, msg: "doucument deleted successfully" });}
    catch (err) {res.status(500).send({ err: err.message })}
}

const deleteDataWithQuery = async function (req, res) {
    try {let result = req.query;
        if (Object.keys(result).length == 0) return res.send("No data");
        if(result.authorId) if(!mongoose.isValidObjectId(result.authorId)) return res.status(400).send({status:false, msg: "invalid author"})
        let decodeToken = jwt.verify(req.headers ["x-api-key"], "functionup-project-1")
        let authorizeAuthor = await blogModel.findOne({$and : [{authorId : decodeToken.authorId},{...result}]})
        if(!authorizeAuthor) return res.status(403).send({status:false, msg:"author Document not found"});
        let deleteBlog = await blogModel.findOneAndUpdate({authorId:decodeToken.authorId, ...result, isDeleted:false },{isDeleted:true, deletedAt:Date.now()}, {new:true})
        if(!deleteBlog) return res.status(400).send({status:false, msg:"Document not found"});
        res.status(200).send({status:true, msg : "Document Deleted successfully"})}
    catch (err) { res.status(500).send({ msg: err.message })}
}
module.exports= {createBlog,getBlogs,update,deleteData,deleteDataWithQuery};





