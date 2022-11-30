const router = require('express').Router()
const passport = require('../config/passport')


let { read, create, update, destroy, showById } = require('../controllers/showHotel')

router.route('/shows').get(read)
router.route('/shows').post(passport.authenticate('jwt', {session : false}), create)
router.route('/shows/:id').patch( passport.authenticate('jwt',{session : false}) ,update)
router.route('/shows/:id').delete( passport.authenticate('jwt',{session : false}),destroy)
router.route('/shows/:id').get(showById)

module.exports = router