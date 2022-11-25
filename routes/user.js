
let router =require('express').Router()


const { Create, read } = require('../controllers/user');
router.route('/users').post(Create)
router.route('/users').get(read)

module.exports = router;
