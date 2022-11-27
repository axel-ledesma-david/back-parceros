const User = require("../models/User");
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail =require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse} = require ('../config/responses')

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
        
        await accountVerificationEmail(email,code)
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
        return res.redirect('https://www.google.com')
      }
      return userNotFoundResponse(req,res)

    } catch(error) {
        next(error)
    }
},

ingresar: async(req,res,next) => {
    //método para que un usuario inicie sesión
    //luego de pasar por todas las validaciones:
        //desestructura la contraseña y el objeto user que vienen en el req
        //compara las contraseñas
            //si tiene éxito debe generar y retornar un token y debe redirigir a alguna página (home, welcome)
                //además debe cambiar online de false a true
            //si no tiene éxito debe responder con el error
    try {

    } catch(error) {
        next(error)
    }
},

ingresarConToken: async(req,res,next) => {
    //método para que un usuario que ya inicio sesión no la pierda al recargar
    //solo para usuarios registrados en nuestra app (social loguin se maneja en front)
    //luego de pasar por todas las validaciones:
        //debe responder con los datos del usuario
    try {

    } catch(error) {
        next(error)
    }
},

salir: async(req,res,next) => {
    //método para que un usuario cierre sesión (cambia online de true a false)
    //solo para usuarios registrados en nuestra app (social logout se maneja en front)
            //si tiene éxito debe debe cambiar online de true a false
            //si no tiene éxito debe responder con el error
    try {

    } catch(error) {
        next(error)
    }
  },
  signIn : async (req, res) => {
    let { password } = req.body
    let { user } = req
    try {
      
    } catch (err) {
      
    }
  },
  signInWithToken: async (req, res) => {
    try {
      
    } catch (err) {
      
    }
}
  
};




module.exports = controller;