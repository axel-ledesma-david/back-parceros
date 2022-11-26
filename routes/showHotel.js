const router = require('express').Router()

let { read, create, update, destroy, showById } = require('../controllers/showHotel')

router.route('/shows').get(read)
router.route('/shows').post(create)
router.route('/shows/:id').patch(update)
router.route('/shows/:id').delete(destroy)
router.route('/shows/:id').get(showById)

module.exports = router