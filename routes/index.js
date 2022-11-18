let router =require('express').Router()

let user = require('./user')
let itinerarycity = require('./itinerarycity')
let hotel = require('./hotel')
let city = require('./city')
let showHotel = require('./showHotel')


router.use('/api',user)
router.use('/api',itinerarycity)
router.use('/api', hotel)
router.use('/api', city)
router.use('/api', showHotel)

module.exports = router
