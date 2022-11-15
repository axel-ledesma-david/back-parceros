let router = require('express').Router()

let { create, read, readHotelDetail } = require('../controllers/hotel')

router.route('/hotels').post(create)
router.route('/hotels').get(read)
router.route('/hotels/:id').get(readHotelDetail)

module.exports = router;