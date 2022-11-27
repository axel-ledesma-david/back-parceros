
let router =require('express').Router()


const { Create, read, signIn, signInWithToken } = require('../controllers/user');
router.route('/users').post(Create)
router.route('/users').get(read)
router.route('/auth/sign-in').post(signIn)
router.route('/auth/token').post(signInWithToken)

module.exports = router;
