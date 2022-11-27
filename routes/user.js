const router = require("express").Router();
const schema = require("../schemas/user");
const validator = require("../middleware/validator");
const { accountExists } = require("../middleware/accountExistsSignUp");
const { registrar, verificar } = require("../controllers/user");

let router = require('express').Router()


const { Create, read, signIn, signInWithToken } = require('../controllers/user');
router.route('/users').post(Create)
router.route('/users').get(read)
router.route('/auth/sign-in').post(signIn)
router.route('/auth/token').post(signInWithToken)
router.post('/sign-up',validator(schema), accountExists,registrar);
router.get('/verify/:code',verificar)

module.exports = router;
