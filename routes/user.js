const router = require("express").Router();
const schema = require("../schemas/user");
const validator = require("../middleware/validator");
const { accountExists } = require("../middleware/accountExistsSignUp");
const { registrar, verificar } = require("../controllers/user");

router.post('/sign-up',validator(schema),registrar);
router.get('/verify/:code',verificar)

module.exports = router;
