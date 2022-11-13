
let router =require('express').Router()


const { update,destroy } = require('../controllers/city');



router.route('/cities/:id').put(update)
router.route('/cities/:id').delete(destroy)


module.exports = router;
