const { response } = require("express");
const jwt = require("jsonwebtoken");
const myUserModel = require("../models/myUserModel");

const createUser = async function (req,res){
    const data = req.body;
    const savedData = await myUserModel.create(data);
    res.send({UserData : savedData})
}

const loginUser = async function (req,res){
    const userName = req.body.emailId;
    const password = req.body.password;

    const userData = await myUserModel.findOne({emailId : userName , password : password});
    if(!userData) return res.send ({error : "User data doesn't exists "});

    const token = jwt.sign({
       userId : userData._id.toString(),
       firstName : userData.firstName 
    },
    "Anmol_Kadam")
    res.setHeader("x-auth-token", token);
    res.send({userLoginDetails : token})
}

// Write a **GET api /users/:userId** to fetch user details. Pass the userId as
//  path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.
const getUserData = async function (req,res){
    const userId = req.params.userId;
    const getData = await myUserModel.findById(userId);
    if(!getData) return res.send({msg : "UserID is incorrect"});

    res.send({userData : getData})
    
}

// - Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes
//  received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
const updateUser = async function(req,res){
    const user = req.params.userId;
    const data = req.body;
    console.log(user, data)
    if(!data) return ("user info required ");
    const updateData = await myUserModel.findOneAndUpdate({_id : user},data,{new: true})
    res.send({updateData : updateData})
}

// - Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as
//  true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
const deleteUser = async function(req,res){
const userId = req.params.userId;
const deletedUser = await myUserModel.findOneAndUpdate({_id : userId},{$set:{isDeleted : true}},{new: true});
res.send({deltedUser : deletedUser})

}

const postMessage = async function (req,res){
    const data = req.body.post;
    const userId = req.params.userId;
    const getData = await myUserModel.findById(userId);
    let postInfo = getData.post;
    postInfo.push(data);
    const updateData= await myUserModel.findOneAndUpdate({_id : userId},{$set : {post : postInfo}}, {new : true});
    res.send({postInfo : updateData})

}
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;

