const User = require("../models/User");
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail =require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, userSignedOutResponse} = require ('../config/responses')

const controller = {


  registrar: async(req,res,next) => {

        let { name,lastName,role,photo,age,email,password } = req.body

        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')

        password = bcryptjs.hashSync(password,10)
        console.log(password)     
    try {
       
        await User.create({ name,lastName,role,photo,age,email,password,code,verified,logged })
        
        // await accountVerificationEmail(email,code)
        return userSignedUpResponse(req,res)
    } catch(error) {
        next(error)
    }
  },

  verificar: async(req,res,next) => {

    const {code} = req.params

    try {

      let user = await User.findOneAndUpdate({code:code},{verified:true},{new:true})
      if(user){
        return res.redirect('/')
      }
      return userNotFoundResponse(req,res)

    } catch(error) {
        next(error)
    }
},

ingresar: async(req,res,next) => {

    try {

    } catch(error) {
        next(error)
    }
},

ingresarConToken: async(req,res,next) => {

    try {

    } catch(error) {
        next(error)
    }
},

salir: async(req,res,next) => {
const {id} = req.user
    try {
await User.findOneAndUpdate({_id: id},{online:false})
return userSignedOutResponse(req,res)
    } catch(error) {
        next(error)
    }
}
  
};




module.exports = controller;