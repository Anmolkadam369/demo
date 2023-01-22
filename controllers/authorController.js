
const authorModel = require("../modules/authorModel")
const jwt = require('jsonwebtoken');
const { collection } = require("../modules/authorModel");
let nameRegex = /^([a-z  A-Z]){2,30}$/;
let emailRegex = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/

const createAuthor = async function (req, res) {
    try {
        let data = req.body;
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: "please provide details" })
        let { fname, lname, title, password, email } = data;
        if (!fname) return res.status(400).send({ status: false, msg: "please provide Fname" })
        fname = data.fname = fname.trim()
        if (!nameRegex.test(fname)) return res.status(400).send({ status: false, msg: "please provide valid fname" })

        if (!lname) return res.status(400).send({ status: false, msg: "please provide lname" })
        lname = data.lname = lname.trim()
        if (!nameRegex.test(lname)) return res.status(400).send({ status: false, msg: "please provide valid lname" })

        if (!title) return res.status(400).send({ status: false, msg: "please provide title" })
        if (title) {
            if (!(["Mr", "Mrs", "Miss"]).includes(title)) return res.status(400).send({ status: false, msg: "please provide valid title" });
        }

        if (!email) return res.status(400).send({ status: false, msg: "please provide email" })
        if (!emailRegex.test(email)) return res.status(400).send({ status: false, msg: "please enter vaild email" })
        if (email) {
            let chkemail = await authorModel.findOne({ email: email });
            if (chkemail) return res.status(400).send({ msg: "give another email" })
        }

        if (!password) return res.status(400).send({ status: false, msg: "please provide password" })
        let saveData = await authorModel.create(data);
        return res.status(201).send({ msg: saveData })
    }
    catch (err) { res.status(500).send({ status: false, err: err.message }) }
}



const login = async function (req, res) {
    try {
        let data = req.body;
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: "please provide details" })

        if (!data.email) return res.status(400).send({ status: false, msg: "please provide email" })
        if (!emailRegex.test(data.email)) return res.status(400).send({ status: false, msg: "please enter vaild email" })
            let chkemail = await authorModel.findOne({ email: data.email });
            if (!chkemail) return res.status(400).send({ msg: "give another email" })
        if (!data.password) return res.status(400).send({ status: false, msg: "please provide password" })
       console.log(chkemail._id)
        let token = jwt.sign({ authorId: chkemail._id.toString() },"functionup-project-1");
        res.setHeader ("x-api-key", token);
        res.status(200).send({ token: token });
    }
    catch (err) { res.status(500).send({ err: err.message }) }
}

module.exports.createAuthor = createAuthor;
module.exports.login = login;