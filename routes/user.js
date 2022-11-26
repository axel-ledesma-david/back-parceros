const router = require("express").Router();
const schema = require("../controllers/user");
const validator = require("../middleware/validator");
const { accountExists } = require("../middleware/accountExistsSignUp");
const { registrar } = require("../controllers/user");

router.post('/user',validator(schema), accountExists,registrar);

module.exports = router;
