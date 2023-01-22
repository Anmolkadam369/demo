const collegeModel = require("../modules/collegeModel");
const internModel = require("../modules/internModel");
const isvalids = require("../validator/validator");
const { college } = require("./collegeController");

const interns = async function (req,res){
    let data = req.body;
    if(Object.keys(data).length ===0) return res.status(400).send({msg:"no data "})
    let {name, email,mobile,collegeName} = data;
    if(!name) return res.status(400).send({msg:"name is required"});
    if(!isvalids.isValidName(name)) return res.status(400).send({msg:"name is invaild"});
    name = data.name = name.trim();

    if(!email) return res.status(400).send({msg:"email is required"});
    if(!isvalids.isValidateEmail(email)) return res.status(400).send({msg:"email is invaild"});
    email = data.email = email.trim();
    let emails = await internModel.findOne({email:email});
    if(emails) return res.status(400).send({msg:"give another email"});

   if(!mobile) return res.status(400).send({msg:"mobile is required"});
    if(mobile.length != 10 || !isvalids.isValidNumber(mobile)) return res.status(400).send({msg:"mobule is invaild"});
    mobile = data.mobile = mobile.trim();
    let mobiles = await internModel.findOne({mobile:mobile});
    if(mobiles) return res.status(400).send({msg:"give another mobile"});

    if(!collegeName) return res.status(400).send({msg:"mobile is required"});
    let nameId = await collegeModel.findOne({name:collegeName, isDeleted:false})
    if(!nameId) return res.status(400).send({msg:"no collegename found"});
    data.collegeId = nameId._id.toString();
    let savedData = await internModel.create(data);
    res.status(200).send({msg:savedData})
}

module.exports.interns = interns
