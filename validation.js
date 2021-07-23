const Joi = require('joi');

const registerValidation = (data)=>{
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        regno: Joi.number().min(10).positive(),
        dept: Joi.string().min(5).max(255),
        tag: Joi.string().min(3).max(10),
        domain: Joi.string().min(5).max(10),
        mobile: Joi.number().min(10).positive(),
        email: Joi.string().email()

    })
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;