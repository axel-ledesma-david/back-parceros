
let router =require('express').Router()
const schema = require('../schemas/itinerary')
const validator = require('../middleware/validator')

const { Create,update,destroy,readitinerarycity,readitinerarybyid } = require('../controllers/itinerarycity');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarUsuario } = require('../middlewares/validar-usuario-itinerario');


router.route('/itineraries').get(readitinerarycity)
router.route('/itineraries/:id').get(readitinerarybyid)

router.route('/itineraries').post([validarJWT, validator(schema)], Create)
router.route('/itineraries/:id').put(validarJWT, validarUsuario, update)
router.route('/itineraries/:id').delete(validarJWT, validarUsuario, destroy)


module.exports = router;


