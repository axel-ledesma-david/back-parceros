
let router =require('express').Router()


const { Create } = require('../controllers/user');
router.route('/users').post(Create)


module.exports = router;
