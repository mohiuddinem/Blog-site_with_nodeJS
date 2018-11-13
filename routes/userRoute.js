
const router = require('express').Router()

const {
    register
} = require('../controllers/userController')

// Signup
router.post('/register', register)

// SignIn
router.post('/login', (req, res, next) =>{

})
// All User
router.get('/', (req, res, next) =>{

})
// Single User
router.post('/:id', (req, res, next) =>{

})
// Edit User
router.patch('/', (req, res, next) =>{

})
// Delete User
// Search

module.exports = router