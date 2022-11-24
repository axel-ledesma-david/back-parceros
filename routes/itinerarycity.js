
let router =require('express').Router()


const { Create,update,destroy,readitinerarycity,readitinerarybyid } = require('../controllers/itinerarycity');


router.route('/itineraries').post(Create)
router.route('/itineraries/:id').put(update)
// itineraries/12354
router.route('/itineraries/:id').get(readitinerarybyid)
router.route('/itineraries/:id').delete(destroy)
router.route('/itineraries').get(readitinerarycity)
// itineraries?userid=354

module.exports = router;


