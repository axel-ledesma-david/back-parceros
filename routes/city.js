
let router =require('express').Router()
const schema = require('../schemas/city')
const validator = require('../middleware/validator')


const { Create,read,readcitybyid,update,destroy } = require('../controllers/city');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarUsuario } = require('../middlewares/validar-usuario-ciudad');

router.route('/cities').get(read)
router.route('/cities/:id').get(readcitybyid)

router.route('/cities').post([validarJWT, validator(schema)], Create)
router.route('/cities/:id').put(validarJWT, validarUsuario, update)
router.route('/cities/:id').delete(validarJWT, validarUsuario, destroy)


module.exports = router;
