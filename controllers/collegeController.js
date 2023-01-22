const collegeModel = require("../modules/collegeModel");
const internModel = require("../modules/internModel");
const isvalids = require("../validator/validator")

const college = async function (req,res){
    let data = req.body;
    if(Object.keys(data).length ===0) return res.status(400).send({msg:"no data send"});
    let {name, fullName,logoLink}=data;

    if(!name) return res.status(400).send({msg:"no name"});
    if(!isvalids.isValidName(name)) return res.status(400).send({msg:"invalid name"});
    name = data.name.trim();
    let names = await collegeModel.findOne({name:name});
    if(names) return res.status(400).send({msg:"name is already present"});
    
    if(!fullName) return res.status(400).send({msg:"no fullName"});
    if(!isvalids.isValidName(fullName)) return res.status(400).send({msg:"invalid fullName"});
    fullName = data.fullName.trim();
    let fullNames = await collegeModel.findOne({fullName:fullName});
    if(fullNames) return res.status(400).send({msg:"fullName is already present"});

    if(!logoLink) return res.status(400).send({msg:"no logolink"});
    if(!isvalids.isValidLink(logoLink)) return res.status(400).send({msg:"invalid logolink"});
    logoLink = data.logoLink.trim();

    let savedData = await collegeModel.create(data);
    res.status(400).send({msg:savedData})
}
 


const collegeDetails  = async function(req,res){
    let data = req.query;
    if(Object.keys(data).length ===0) return res.status(400).send({msg:"no data send"});
    if(!data.collegeName) return res.status(400).send({msg:"no Collegename"});
    let ans = await collegeModel.findOne({name:data.collegeName, isDeleted:false});
    if(Object.keys(ans).length ===0) return res.status(404).send({msg:"no data found"});
    let collegeId = ans._id.toString();
    let ans2 = await internModel.find({collegeId :collegeId , isDeleted:false}).select({name:1, email:1, mobile:1});
    if(Object.keys(ans2).length ===0) return res.status(404).send({msg:"no interns found"});
    let ans3 = {
        name:ans.name,
        fullName:ans.fullName,
        logoLink:ans.logoLink,
        interns:ans2
    }
    res.status(200).send({msg: ans3})
    
    
}




















// const college = async function (req, res) {
//     try {
//         let data = req.body;
//         let { name, fullName, logoLink } = data;
//         if (Object.keys(data).length === 0)
//             return res.status(400).send({ status: false, msg: "No data in the Body" });

//         if (!name)
//             return res.status(400).send({ status: false, msg: "name is required" });
//         if(!isvalids.isValidName(name))
//             return res.status(400).send({ status: false, msg: "enter valid Name" })
//         name = data.name = name.trim()
//         let names = await collegeModel.findOne({ name: name })
//         if (names) return res.status(400).send({ status: false, msg: "Enter different name" })


//         if (!fullName)
//             return res.status(400).send({ status: false, msg: "fullName is required" });
//         if (!isvalids.isValidName(fullName))
//             return res.status(400).send({ status: false, msg: "enter valid fullName" })
//         fullName = data.fullName = fullName.trim();
//         let fullnames = await collegeModel.findOne({ fullName: fullName })
//         if (fullnames) return res.status(400).send({ status: false, msg: "Enter different fullname" })


//         if (!logoLink)
//             return res.status(400).send({ status: false, msg: "logoLink is required" });
//         logoLink = data.logoLink = logoLink.trim();
//         if (!isvalids.isValidLink(logoLink)) return res.status(400).send({ status: false, msg: "Enter valid logoLink" })

//         let saveCollege = await collegeModel.create(data);
//         return res.status(201).send({ status: true, msg: saveCollege })
//     }
//     catch (err) {
//         res.status(500).send({ status: false, err: err.message })
//     }
// }


// const collegeDetails = async function (req, res) {
//     try {
//         let data = req.query
//         console.log(data)
//         if (Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "Please Enter College Name" });
//         data.collegeName = data.collegeName.trim()
//         if (Object.values(data) == "") return res.status(400).send({ status: false, msg: "Please Enter value" });
//         if(!data.collegeName) return res.status(400).send({status : false , msg : "Enter only clg name"})
//         const check = await collegeModel.findOne({ $or: [{ fullName: data.collegeName }, { name: data.collegeName }], isDeleted: false })
//         if (!check) return res.status(404).send({ status: false, msg: "college name not found" });
//         let collegeId = check._id
//         let getInternData = await internModel.find({ collegeId: collegeId, isDeleted: false }).select({ name: 1, email: 1, mobile: 1, _id:0 })
//         if (Object.keys(getInternData).length === 0) return res.status(404).send({ status: false, msg: "No interns found" });
//         let name = check.collegeName;
//         let fullName = check.fullName;
//         let logoLink = check.logoLink;
//         let collegeDetail = {
//             name: name,
//             fullName: fullName,
//             logoLink: logoLink,
//             interns: getInternData
//         }
//         res.status(200).send({ status: true, data: collegeDetail });
//     }
//     catch (err) {
//         res.status(500).send({ status: false, error: err.message });
//     }
// }

// const collegeDetails =  async function(req,res){
//     let data = req.query;
//     if(Object.keys(data).length === 0) res.status(400).send({msg:"no data found"});
//     if(!data.collegeName) res.status(400).send({msg:"no data found"});
//     let ans = await collegeModel.findOne({name:data.collegeName, isDeleted:false});
//     if(!ans) res.status(404).send({msg:"no data found"})
//     let collegeId = ans._id;
//     let ans2 = await internModel.find({collegeId:collegeId,isDeleted:false}).select({name:1, email:1, mobile:1, _id:0});
//     if(Object.keys(ans2).length === 0) res.status(400).send({msg:"no data found"});
//     let ans3 = {
//         name:ans.name, 
//         fullName:ans.fullName,
//         logoLink:ans.logoLink,
//         inters:ans2
//     }
//     res.status(200).send({msg: ans3})

// }



module.exports = { college, collegeDetails }
