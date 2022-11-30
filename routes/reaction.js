
let router =require('express').Router()
const schema = require('../schemas/reaction')
const validator = require('../middleware/validator')

const { create,update } = require('../controllers/reaction');





router.route('/reactions').post(validator(schema),create)
router.route('/reactions/:id').put(update)


module.exports = router;