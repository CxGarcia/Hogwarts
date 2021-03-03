const express = require('express');
const router = express.Router();
const registerUser = require('./controller/customer-controller');
const auth = require('./controller/auth-controller');
const authMiddleware = require('./middleware/auth');


//TODO: user authMiddleware when I want to manage the access for th routes 
//to give authority to access those routes to user with certain privilege
//ex: router.post('/auth', authMiddleware, auth);
//CHECK MOSH AUTHORIZATION PART WHEN WORKING ON ADMIN PRIVILEGE


//Customers routers
router.post('/signUp', registerUser);
router.post('/auth', auth);


module.exports = router;