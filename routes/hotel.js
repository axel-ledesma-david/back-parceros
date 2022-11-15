let router = require('express').Router()

let { create, read, readHotelDetail, update } = require('../controllers/hotel')

router.route('/hotels').post(create)
router.route('/hotels').get(read)
router.route('/hotels/:id').get(readHotelDetail)
router.route('/hotels/:id').put(update)

module.exports = router;