let router = require('express').Router()
const schema = require('../schema/hotel')
const validator = require('../middleware/validator')
const passport = require('../config/passport')

let { create, read, readHotelDetail, update, destroy } = require('../controllers/hotel')

router.route('/hotels').post( validator(schema), passport.authenticate('jwt', { session: false } ), create)
router.route('/hotels').get(read)
router.route('/hotels/:id').get(readHotelDetail)
router.route('/hotels/:id').patch(passport.authenticate('jwt', { session: false } ),  update)
router.route('/hotels/:id').delete( passport.authenticate('jwt', { session: false } ), destroy)

module.exports = router;