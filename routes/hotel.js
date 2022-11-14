let router = require('express').Router()

let { create, read } = require('../controllers/hotel')

router.route('/hotels').post(create)
router.route('/hotels').get(read)

module.exports = router;