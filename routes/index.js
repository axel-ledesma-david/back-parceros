let router =require('express').Router()

let user = require('./user')
let itinerarycity = require('./itinerarycity')
let hotel = require('./hotel')


router.use('/api',user)
router.use('/api',itinerarycity)
router.use('/api', hotel)

module.exports = router
