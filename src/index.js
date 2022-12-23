const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const IP = require('ip');
//const Date = require('date-and-time');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://mongolearner:SQVCaxJK4gwb4YhP@cluster0.f0f93p0.mongodb.net/anmol-123", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );
//   app.use (
//     function (req,res,next) {
//     const ipAddress = IP.address();
//     console.log(ipAddress)
//     next();
// });

// app.use(
//     function(req,res,next){
//         const dateAndTime = Date();
//         console.log(dateAndTime)
//     }
// )

const assignmentMW= function (req, res, next) {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + " "
                    + (currentdate.getMonth()+1)  + " " 
                    + currentdate.getFullYear() + "  "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    let ip= req.ip
    let url= req.originalUrl
    console.log(`${datetime}  ${ip}  ${url}`)
    next()    
}


// const assignmentMW= function (req, res, next) {
//     let dateAndTime = Date();
//     let url= req.originalUrl
//     let ipAddress = IP.address();
//          console.log(dateAndTime, ipAddress , url)
//     next();   
// }
app.use( assignmentMW )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
