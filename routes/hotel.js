let router = require('express').Router()

let { create, read, readHotelDetail, update, destroy } = require('../controllers/hotel')

router.route('/hotels').post(create)
router.route('/hotels').get(read)
router.route('/hotels/:id').get(readHotelDetail)
router.route('/hotels/:id').patch(update)
router.route('/hotels/:id').delete(destroy)

module.exports = router;