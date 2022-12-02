
let router =require('express').Router()
const schema = require('../schemas/reaction')
const validator = require('../middleware/validator')

const { create,update,readitineraryid,readuserid,destroy } = require('../controllers/reaction');
const passport = require('../config/passport')





router.route('/reactions').post(validator(schema),create)
router.route('/reactions').put(passport.authenticate('jwt', {session:false}), update)
router.route('/reactions').get(passport.authenticate('jwt', {session:false}), readuserid)
router.route('/reactionsByItinerary').get(readitineraryid)
router.route('/reactions/:id').put(passport.authenticate('jwt', {session:false}), destroy)


module.exports = router;