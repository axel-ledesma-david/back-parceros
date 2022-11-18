const router = require('express').Router()

let { read, create, update } = require('../controllers/showHotel')

router.route('/shows').get(read)
router.route('/shows').post(create)
router.route('/shows/:id').patch(update)

module.exports = router