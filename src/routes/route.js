const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
    
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    // let ele= req.body.element
    // arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


let allplayers = [ {
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ],
    "book":{
        "bookingNumber": 1,
        "sportId": "",
        "centerId": "",
        "type": "private",
        "slot": "16286598000000",
        "bookedOn": "31/08/2021",
        "bookedFor": "01/09/2021"
}
    },

    {
        "name": "lokesh",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "gaurav",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    }
]
 router.post ('/allplayers/name/books/bookingid',function(req,res){
    let name1 = req.body.playerName;
    let booking1 = req.body.bookingid;
    for(let i=0; i<allplayers.length; i++){
    if(name1 !== allplayers.name){
        res.send("name is not matching");
    }
    if(booking1 === allplayers[i].bookingNumber){
        res.send("booking is already occupied ");
    }
}

 })




router.post('/allplayers', function(req,res){
    let player1 = req.body.p1;
    for(let i=0; i<allplayers.length; i++){
        if(allplayers[i].name === player1.name){
            res.send("Two players have same name ");
        }
    }
    allplayers.push(player1);
    res.send({msg : allplayers});
    res.send("hi brother");
})


router.post('/players1', function(req,res){
    let player1 = req.body.p1;
    for(let i=0; i<allplayers.length; i++){
        for(let j=i+1; j<allplayers.length; j++){
            if(allplayers[i].name === allplayers[j].name){
            res.send("players have same name in existing array");
            }
}}

for(let i=0; i<allplayers.length; i++){
    if(allplayers[i].name === player1.name){
        res.send("the added player has same name from the existing array player");
    }
}
    
allplayers.push(player1);
res.send({msg : allplayers});
})



let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 
 router.post('/votingStatus', function(req,res){
    let validAge = req.query.votingAge;
    let ansArray = persons.filter(person => person.age >= validAge);
    ansArray.map(final => final.votingStatus === false ? final.votingStatus = true : true );
    res.send({msg : ansArray});
 })


 

    // for(let i=0; i<ansArray.length; i++){
    //     if(ansArray[i].votingStatus === false){
    //         ansArray[i].votingStatus = true;
    //     }}

//  router.post('/votingStatus', function(req,res){
//     let ansArray = persons.filter(person => person.age > 18);
//     res.send({msg : ansArray});
//  })




















module.exports = router; 