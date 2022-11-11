
let router =require('express').Router()


const { Create } = require('../controllers/itinerarycity');
router.route('/itineraries').post(Create)


module.exports = router;
