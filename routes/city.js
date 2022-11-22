
let router =require('express').Router()
const schema = require('../schemas/city')
const validator = require('../middleware/validator')


const { Create,read,readcitybyid,update,destroy } = require('../controllers/city');

router.route('/cities').get(read)
router.route('/cities/:id').get(readcitybyid)
router.route('/cities').post(validator(schema),Create)
router.route('/cities/:id').put(update)
router.route('/cities/:id').delete(destroy)


module.exports = router;
