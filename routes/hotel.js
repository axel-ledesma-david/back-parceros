let router = require('express').Router()
const schema = require('../schema/hotel')
const validator = require('../middleware/validator')

let { create, read, readHotelDetail, update, destroy } = require('../controllers/hotel')

router.route('/hotels').post( validator(schema), create)
router.route('/hotels').get(read)
router.route('/hotels/:id').get(readHotelDetail)
router.route('/hotels/:id').patch(update)
router.route('/hotels/:id').delete(destroy)

module.exports = router;