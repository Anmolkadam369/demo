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












// const interns = async function (req, res) {
//     try {
//         let data = req.body;
//         if (Object.keys(data).length === 0)
//             return res.status(400).send({ status: false, msg: "No data in the Body" });
//         let { name, mobile, email, collegeName } = data;
//         if (!name)
//             return res.status(400).send({ status: false, msg: "name is required" });
//         if (!isvalids.isValidName(name))
//             return res.status(400).send({ status: false, msg: "enter valid Name" })

//         if (!email)
//             return res.status(400).send({ status: false, msg: "email is required" });
//         if (!isvalids.isValidateEmail(email))
//             return res.status(400).send({ status: false, msg: "Enter valid Email" })
//         let emailID = await internModel.findOne({ email: email })
//         if (emailID) return res.status(400).send({ status: false, msg: "Enter different email" })

//         if (!mobile)
//             return res.status(400).send({ status: false, msg: "Mobile is required" });
//         if ((mobile.length != 10 || typeof (mobile) != "string") || !isvalids.isValidNumber(mobile)) {
//             return res.status(400).send({ status: false, msg: "Enter valid mobile number" });
//         }
//         let mobilePhone = await internModel.findOne({ mobile: mobile })
//         if (mobilePhone) return res.status(400).send({ status: false, msg: "Enter different Mobile Number" })
//         if (!collegeName)
//             return res.status(400).send({ status: false, msg: " collegeName is required" });
//         const NamedId = await collegeModel.findOne({ $or: [{ fullName: collegeName }, { name: collegeName }], isDeleted: false })
//         if (!NamedId) return res.status(404).send({ status: false, message: "No data found" })

//         console.log(NamedId)
//         data.collegeId = NamedId._id;
//         console.log(NamedId._id)
//         console.log(data.collegeId)

//         let saveIntern = await internModel.create(data);
//         return res.status(201).send({ status: true, message: saveIntern })

//     }
//     catch (err) {
//         res.status(500).send({ status: false, err: err.message })
//     }
// }
module.exports.interns = interns
