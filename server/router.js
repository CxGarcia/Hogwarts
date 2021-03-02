const express = require('express');
const router = express.Router();
const registerUser = require('./controller/customer-controller');

//Customers routers

router.post('/signUp', registerUser);


module.exports = router;