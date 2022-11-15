const router = require('express').Router()

let { read } = require('../controllers/showHotel')

router.route('/shows').get(read)

module.exports = router