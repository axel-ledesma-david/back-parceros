const router = require('express').Router()

let { read, create } = require('../controllers/showHotel')

router.route('/shows').get(read)
router.route('/shows').post(create)

module.exports = router