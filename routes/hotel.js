let router = require('express').Router()

let { create } = require('../controllers/hotel')

router.route('/hotels').post(create)

module.exports = router;