
let router =require('express').Router()


const { Create,update,destroy } = require('../controllers/itinerarycity');
router.route('/itineraries').post(Create)
router.route('/itineraries/:id').put(update)
router.route('/itineraries/:id').delete(destroy)


module.exports = router;
