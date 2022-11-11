let router =require('express').Router()

let user = require('./user')
let itinerarycity = require('./itinerarycity')

router.use('/api',user)
router.use('/api',itinerarycity)

module.exports = router
