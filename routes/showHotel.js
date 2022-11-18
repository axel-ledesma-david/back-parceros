const router = require('express').Router()

let { read, create, update, destroy } = require('../controllers/showHotel')

router.route('/shows').get(read)
router.route('/shows').post(create)
router.route('/shows/:id').patch(update)
router.route('/shows/:id').delete(destroy)

module.exports = router