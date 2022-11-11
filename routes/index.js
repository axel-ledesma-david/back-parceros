let router =require('express').Router()

let user = require('./user')

router.use('/api',user)


module.exports = router
