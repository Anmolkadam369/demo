const isValidName = function(name){
     name=name.trim()
    const regexname =  /^([a-z  A-Z]){2,30}$/;
    return regexname.test(name)
}

const isValidEmail = function(email) {
    email=email.trim()
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[com]+)*$/;
    return emailRegex.test(email);
};

const isValidPassword = function (password) {
     password=password.trim()
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/
    return passwordRegex.test(password);
};

const isValidPhone=function (phone){
     phone=phone.trim()
    const mobileRegex=/^[6-9]{1}[0-9]{9}$/
    return  mobileRegex.test(phone);
}




module.exports={isValidPassword,isValidEmail,isValidName,isValidPhone}