
let router =require('express').Router()


const { Create,update } = require('../controllers/itinerarycity');
router.route('/itineraries').post(Create)
router.route('/itineraries/:id').put(update)


module.exports = router;
