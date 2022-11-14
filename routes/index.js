let router =require('express').Router()

let user = require('./user')
let itinerarycity = require('./itinerarycity')
let hotel = require('./hotel')
let city = require('./city')


router.use('/api',user)
router.use('/api',itinerarycity)
router.use('/api', hotel)
router.use('/api', city)

module.exports = router
