const Comment = require('../models/Comment')
const { verifyUserResponse } = require('../config/responses')

      async function verifyUser (req, res, next){

            let idAuth = req.user.id
            let { id } = req.params
            let isUser = await Comment.findOne({ _id: id } )

            if( idAuth === isUser.userId ){
                return next()
            }
            
            return verifyUserResponse(req, res)   
        }
        

            
           

               
         
        
 module.exports = { verifyUser }
        
  

