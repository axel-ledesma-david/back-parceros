let router = require('express').Router()
const validator = require('../middleware/validator')
const schema = require('../schemas/comment')

const passport = require('../config/passport')
const { read, create, update, destroy } = require('../controllers/comment')

/* const {verifyUser} = require('../middleware/verifyUser') */

router.get('/comments', read)
router.post('/comments', validator(schema) , passport.authenticate('jwt', { session: false } ), create)
router.put('/comments/:id', passport.authenticate('jwt', { session: false } ), update)
router.delete('/comments/:id', passport.authenticate('jwt', { session: false } ), destroy)

module.exports = router
