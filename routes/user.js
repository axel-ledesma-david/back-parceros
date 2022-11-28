const router = require("express").Router();
const schema = require("../schemas/user");
const schemaSignIn = require("../schemas/userSignIn")
const validator = require("../middleware/validator");
const { accountExistsSignUp } = require("../middleware/accountExistsSignUp");
const { accountExistsSignIn } = require('../middleware/accountExistsSignIn')
const { accountHasBeenVerified } = require('../middleware/accountHasBeenVerified') 
const mustSignIn = require('../middleware/mustSignIn')
const passport = require('../config/passport')





const { signUp, verify, signIn, signInWithToken, readUser } = require('../controllers/user');

router.post( '/sign-in', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, signIn)
router.route('/token').post( passport.authenticate('jwt', {session : false}) , mustSignIn, signInWithToken)
router.post('/sign-up',validator(schema), accountExistsSignUp, signUp);
router.get('/verify/:code',verify)
router.get('/me/:id', mustSignIn, readUser)

module.exports = router;
