const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require('./router/router.js')
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://Ruksar:1ststep@ruksar.cg402ym.mongodb.net/test")
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log(err))
app.use('/', route)
app.listen( 3000, function () {
    console.log('Express app running on port ' + (3000))
});
