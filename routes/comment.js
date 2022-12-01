let router = require('express').Router()
const validator = require('../middleware/validator')
const schema = require('../schemas/comment')

const passport = require('../config/passport')
const { read, create } = require('../controllers/comment')


router.get('/comments', read)
router.post('/comments', validator(schema) , passport.authenticate('jwt', { session: false } )  , create)

module.exports = router
