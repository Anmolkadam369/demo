const date = new Date();
// console.log(date);
const month = date.getMonth();
// console.log(month);
const getBatchInfo = {
     name: "Californium",
     week : "W3D4",
     Day :"the topic for today is Nodejs module system"
    
}

module.exports.dates = date;
module.exports.months = month;
module.exports.getBatchInformation = getBatchInfo;
