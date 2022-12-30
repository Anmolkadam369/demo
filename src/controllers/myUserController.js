const { response } = require("express");
const jwt = require("jsonwebtoken");
const myUserModel = require("../models/myUserModel");

const createUser = async function (req, res) {
    try {
        const data = req.body;
        if (Object.keys(data).length != 0) {
            const savedData = await myUserModel.create(data);
            res.status(201).send({ UserData: savedData })
        }
        else {
            res.status(400).send({ msg: "No Data In Body" })
        }
    }
    catch (err) {
        res.status(500).send({ err: err.message })
    }
}

const loginUser = async function (req, res) {
    try {
        const userName = req.body.emailId;
        const password = req.body.password;
        if(Object.keys(userName).length !=0 && Object.keys(password).length != 0){
        const userData = await myUserModel.findOne({ emailId: userName, password: password });
        if (!userData) return res.status(404).send({ error: "User not found"});
        const token = jwt.sign({
            userId: userData._id.toString(),
            firstName: userData.firstName
        },
            "Anmol_Kadam")
        res.setHeader("x-auth-token", token);
        res.send({ userLoginDetails: token })
    }
    else{
        res.status(400).send({ msg: "No Data In Body" })
    }
}
    catch (err) {
        res.status(500).send({ err: err.message })
    }

}

// Write a **GET api /users/:userId** to fetch user details. Pass the userId as
//  path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.
const getUserData = async function (req, res) {
    try{
    const userId = req.userId;
    const getData = await myUserModel.findById(userId);
    // if (!getData) return res.status(404).send({ msg: "user not found" });
    res.send({ userData: getData })
}
    catch(err){
        res.status(500).send({ err: err.message})
    }
}

// - Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes
//  received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
const updateUser = async function (req, res) {
    try{
    const user = req.userId;
    const data = req.body;
    if (Object.keys(data).length != 0){
    const updateData = await myUserModel.findOneAndUpdate({ _id: user }, data, { new: true })
    res.send({ updateData: updateData })
    }
    else{
        res.status(400).send({ msg: "No Data In Body" })
    }
    }
    catch(err){
        res.status(500).send({errType: err.name, err: err.message})
    }
}

// - Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as
//  true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
const deleteUser = async function (req, res) {
    try{
        const userId = req.userId;
        const deletedUser = await myUserModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
        res.send({ deltedUser: deletedUser })
    }
    catch (err){
        res.status(500).send({errorMessage : err.message})
    }
}

const postMessage = async function (req, res) {
    try{
        const data = req.body.post;
        const userId = req.userId;
        console.log(data)
        if(data == null){  res.status(400).send({ msg : "no data"})}
        const getData = await myUserModel.findById(userId);
        let postInfo = getData.post;
        postInfo.push(data);

        const updateData = await myUserModel.findOneAndUpdate({ _id: userId }, { $set: { post: postInfo } }, { new: true });
        res.send({ postInfo: updateData })
        }
catch (err){
    res.status(500).send({errorType : err.name})
}
}
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;

