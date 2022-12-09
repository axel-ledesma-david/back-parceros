const router = require("express").Router();
const schema = require("../schemas/user");
const schemaSignIn = require("../schemas/userSignIn")
const validator = require("../middleware/validator");

/* const { accountExists } = require("../middleware/accountExistsSignUp");
const { registrar, verificar } = require("../controllers/user");
const jwt = require("jsonwebtoken")

const generateToken = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(
      payload,
      "seed123",
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        resolve(token);
      }
    );
  });
}

const signin = async (req, res) => {
  const token = await generateToken(req.body.id);
  res.json({id: req.body.id, token})
} 


router.post('/sign-up',validator(schema),registrar);
router.post('/signin', signin);
router.get('/verify/:code',verificar)
 router.put('signout',passport.authenticate('jwt',{session:false}),salir)



 */
const { accountExistsSignUp } = require("../middleware/accountExistsSignUp");
const { accountExistsSignIn } = require('../middleware/accountExistsSignIn')
const { accountHasBeenVerified } = require('../middleware/accountHasBeenVerified') 
const mustSignIn = require('../middleware/mustSignIn')
const passport = require('../config/passport')





const { signUp, verify, signIn, signInWithToken, readUser, updateDataUser, salir } = require('../controllers/user');

router.post( '/sign-in', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, signIn)
router.route('/token').post(passport.authenticate('jwt', {session : false}) , mustSignIn, signInWithToken)
router.post('/sign-up', signUp);
router.get('/verify/:code',verify)
router.get('/me/:id', readUser)
router.patch('/me/:id', passport.authenticate('jwt', {session : false}) , updateDataUser )
router.put('/signout',passport.authenticate('jwt',{session:false}),salir)

module.exports = router;
