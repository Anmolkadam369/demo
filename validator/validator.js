const isValidateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return re.test(email)
    
};

const isValidName = function(name){
    const regexname =  /^([a-z  A-Z]){2,30}$/;
    return regexname.test(name)
}

const isValidLink = function(logoLink){
    const regexLink =/\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|](.png|.jpg|.JPG|.gif|.GIF|.doc|.DOC|.pdf|.PDF|.jpeg|.jfif)/;
    return regexLink.test(logoLink)
}

const isValidNumber = function(mobile){
    const regex = /^[1-9]\d*$/
    return regex.test(mobile)
}

module.exports.isValidateEmail=isValidateEmail;
module.exports.isValidName=isValidName;
module.exports.isValidLink=isValidLink;
module.exports.isValidNumber=isValidNumber;
