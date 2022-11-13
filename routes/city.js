
let router =require('express').Router()


const { update } = require('../controllers/city');



router.route('/cities/:id').put(update)



module.exports = router;
