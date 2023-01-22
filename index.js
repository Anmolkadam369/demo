const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/routes');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://mongolearner:SQVCaxJK4gwb4YhP@cluster0.f0f93p0.mongodb.net/anmol-123")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
app.use('/', route)
app.listen(3000, function () {
    console.log('Express app running on port ' + (3000))
});