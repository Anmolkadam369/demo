const jwt = require ("jsonwebtoken");
const tokenChk = async function(req,res,next){
    try{
        let token = req.headers ["x-api-key"];
        console.log(token)
        if(!token) return res.status(401).send({msg :"missing authentication token"});
        const decode = jwt.verify(token,"myProject")
            console.log(decode)
            req.authorId = decode.authorId; 
            console.log(req.authorId)
            next()
    }
    catch(err){
        res.status(500).send({msg : err.message})
    }
}
module.exports.tokenChk = tokenChk;