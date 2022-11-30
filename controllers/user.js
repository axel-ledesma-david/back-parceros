const User = require("../models/User");
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse } = require('../config/responses')


const controller = {


  signUp: async (req, res, next) => {

    let { name, lastName, role, photo, age, email, password } = req.body

    let verified = false
    let logged = false
    let code = crypto.randomBytes(10).toString('hex')

    password = bcryptjs.hashSync(password, 10)
    console.log(password)
    try {

      await User.create({ name, lastName, role, photo, age, email, password, code, verified, logged })

      await accountVerificationEmail(email, code)
      return userSignedUpResponse(req, res)
    } catch (error) {
      next(error)
    }
  },

  verify: async (req, res, next) => {

    const { code } = req.params

    try {

      let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
      if (user) {
        return res.redirect('https://www.google.com')
      }
      return userNotFoundResponse(req, res)

    } catch (error) {
      next(error)
    }
  },
  signIn: async (req, res, next) => {
    let { password } = req.body
    let { user } = req
    try {
      const verifiedPass = bcryptjs.compareSync(password, user.password)

      if (verifiedPass) {
        const userLogged = await User.findOneAndUpdate({ _id: user.id }, { logged: true }, { new: true })
        const token = jwt.sign(
          { id: userLogged._id, name: userLogged.name, photo: userLogged.photo, logged: userLogged.logged, role: userLogged.role },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        )

        return res.status(200).json({
               response: { user, token },
               success: true,
               message: `Welcome ${user.name} ${user.lastName}`
        })
      } else {
        return invalidCredentialsResponse(req, res)
      }


    } catch (err) {
      next(err)
    }
  },
  signInWithToken: async (req, res, next ) => {

    let { user } = req

    try {

      res.json({
        response: {user},
        succes: true,
        message: 'Welcome ' + user.name
      })

    } catch (err) {
      next(err)
    }
  },
  readUser: async (req, res, next) => {

      let { id } = req.params

      try {
        let userLogged = await User.findOne({ _id: id })
        
        if(userLogged.logged){

          let { name, lastName, photo, age, email, _id } = userLogged

          res.status(200).json({
            res: {
              name,
              lastName,
              photo,
              age,
              email,
              _id
            },
            success: true,
            message: 'The user has been found'
          })
        } else {
          return userNotFoundResponse(req, res)
        }
       
      } catch (err) {
          next(err)
      }
  },
  updateDataUser: async (req, res, next) => {

    let { id } = req.params

    try {

        let user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })

      if (user && user.logged){
            res.status(200).json({
            res: user,
            success: true,
            message: 'User has been updated successfully'
          }) 
        } else {
          return userNotFoundResponse(req, res)
        }

    } catch (error) {
        next(error)
    }
  }

};




module.exports = controller;