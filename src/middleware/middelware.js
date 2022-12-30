const jwt = require("jsonwebtoken");

const mid1 = async function(req,res,next){
        let userId = req.params.userId;
        if(!userId) return ("user info required ");
        let token = req.headers["X-Auth-token"];
        if(!token) token = req.headers["x-auth-token"];
        if(!token) return res.status(400).send({msg : "not Header information"});

        const decode = jwt.verify(token, "Anmol_Kadam")//, (err)=>{
        //     if(err){
        //         return res.send({msg : "not matching broooo"})
        //     }
        // })                                                  //jevha sarv barobar asta ani jar me he use kel tar hang hot ani comment kel tar work hota
                                                                // ani jar kahi changes kele in header token tar he line print hote
                                                                // ani jar url userId change kela tar run hot nahi
        if(!decode) return res.status(404).send ({msg : "decode is not there"});
        if(userId != decode.userId) {
            return res.status(403).send({msg : "decode or userId is not there"})
        } 
        req.userId = userId                                //sarv barobar asel ani he use kela tar proper work hote
        next();                                            //if i will comment this lines ani jar me url change kela tar to work hoil
                                                            // ani jar kahi changes kele in header token ani line no 11 is not commented tar line no 12 
                                                            // print hote
                                                  
       
}

module.exports.mid1= mid1;

// (err)=>{
//     if(err) {return res.send({msg : "jwt is not proper"})}
// })