const joi = require('@hapi/joi')

const schema = {
    user : joi.object({
        name : joi.string().min(3).message("Minimum 3 characters").max(100).required(),
        email : joi.string().email().message("Inavlid email").required(),
        phone :joi.number().integer().min(10000000000).message("Inavalid mobile number").max(9999999999).message("Inavalid mobile number").required(),
        password : joi.string().pattern(new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")).message("Atleast 1 uppercase, 1 lowercase, 1 digit, 1 special charcter").required()
    })
}
module.exports = schema;
