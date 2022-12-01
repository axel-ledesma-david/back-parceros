
let router =require('express').Router()
const schema = require('../schemas/reaction')
const validator = require('../middleware/validator')

const { create,update,readitineraryid,readuserid,destroy } = require('../controllers/reaction');





router.route('/reactions').post(validator(schema),create)
router.route('/reactions').put(update)
router.route('/reactions').get(readitineraryid)
router.route('/reactions').get(readuserid)
router.route('/reactions/:id').delete(destroy)


module.exports = router;