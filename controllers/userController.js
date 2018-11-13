
const Joi = require('joi')
const User = require('../models/User')
const register = (req, res, next) => {

    let {
        username,
        name,
        email,
        password
    } = req.body

    const UserSchema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required(),
        name: Joi.string().required(),
        email: Joi.string().email({minDomainAtoms:2}).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
    })

    Joi.validate({
        username,
        name,
        email,
        password
    }, UserSchema, (err, value) =>{
        if(err){
            // console.log(err)
            res.json({
                error:err.details[0].message
            })
        }
            console.log(value)

            res.json({
                value
            })
        
    })

    //user data
    // validate
    // chech user exist
    // pass hash
    // save

}

module.exports = {
    register
}