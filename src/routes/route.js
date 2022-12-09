const express = require('express');
const router = express.Router();
const movies = express.Router();
// const intro = require('./introduction')
// const employee = require('./employee')

const logger = require('../logger/logger');
const helper1 = require('../util/helper');
const validator = require('../validator/formatter');
const _ = require('underscore');
const trimming = require(`trim`);
const lod = require(`lodash`);
const { chunk, union } = require('underscore');
const { tail, fromPairs } = require('lodash');

router.get('/test-me', function (req, res) {
    // Problem 1
    // Module1 : src/logger/logger.js containing the following exported function
    // - welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Californium cohort.’ on console
    // Call welcome in route.js inside the test-me handler
    
// logger.welcomeFunction('anmol');


// 2nd question : 
// Problem 2
// Module 2 : src/util/helper.js
// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is …..
// For example - Californium, W3D4, the topic for today is Nodejs module system
// 	Call all these functions in route.js inside the test-me route handler

// console.log("this is date : "+helper1.dates);
// console.log("the current month is : " , helper1.months);
// console.log("the name of the batch is : ",helper1.getBatchInformation.name);
// console.log("the week of the batch is : ",helper1.getBatchInformation.week);
// console.log("the content of the day : ",helper1.getBatchInformation.Day);


// // 3rd question :
// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
// Call all these functions in route.js inside the test-me route handler

// console.log(`trimmed string is :${validator.trims}`);
// console.log(`this is lower case : ${validator.lower}`);
// console.log(`this is upper case : ${validator.upper}`);


// 4th question : 

// Problem 4
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year 
// and split the array into 4 equally sized sub-arrays using the chunk function. 
// Print these sub-arrays on console.

// const month=["January", "February", "March", "April",
//  "May", "June"," July", "August"," September", 
//  "October"," November", "December"];
// const answer1 =lod.chunk(month, 4);
// console.log("the chunk of array is : ",answer1);


// - Create an array containing the first 10 odd numbers.
//  Using the tail function, return the last 9 elements of it and print them on console.

// const arr=[13,3,23,35,57,13,25,59,71,45];
// const answer2 = lod.tail(arr);
// console.log('the tail numbers are : ',answer2);


//- Create 5 arrays of numbers containing a few duplicate values. 
//Using the function union create a merged array with only unique values and print them on console
//
// const arr1=[1,2,3];
// const arr2=[3,5,6];
// const arr3=[7,8,6];
// const arr4=[11,12,13];
// const arr5=[15,16,17];
// const answer3 = lod.union(arr1,arr2,arr3,arr4,arr5);
// console.log("the union of these five arrays :", answer3);

// - Use the function fromPairs to create an object containing key value pairs
//. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

// let movie = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
// let answer4 = lod.fromPairs(movie);
// console.log('the key-value pairs are : ', answer4);


res.send("this is great...");
});

module.exports = router;







// router.get('/test-you', function(req, res){
//     console.log("I am here")
//     res.send("very important text")
// })



    // router.get('/movies',function(req,res){
    //         const arr = ['Rang de basanti', 'The shining', 'Lord of the ring', 'Batman begins'];
    //         console.log("movies list ");
    //         res.send(arr);
    //     })

    //         router.get('/movies/:indexNumber',function(req,res){
    //             const index = req.params.indexNumber;
    //             const arr = ['Rang de basanti', 'The shining', 'Lord of the ring', 'Batman begins'];
    //             console.log(req.params.indexNumber);
    //             res.send(arr[0]);
    //         })
            
        







    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)
    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)


    // res.send('any dummy text')


