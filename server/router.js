const express = require('express');
const router = express.Router();
const authMiddleware = require('./middleware/auth');
const paymentApi = require('./controller/payment-controller');
const auth = require('./controller/auth-controller');
const { addOrder, getAllOrders } = require('./controller/order-controller');
const { registerUser, getCustomerById, getAllCustomers } = require('./controller/customer-controller');
const { addTechnician, getAllTechnicians, deleteTechnician } = require('./controller/technician-controller');
const { addService, getAllServices, updateService, deleteService } = require('./controller/services-controller');

//TODO: user authMiddleware when I want to manage the access for th routes 
//to give authority to access those routes to user with certain privilege
//ex: router.post('/auth', authMiddleware, auth);
//CHECK MOSH AUTHORIZATION PART WHEN WORKING ON ADMIN PRIVILEGE


//Customers routers
router.post('/signUp', registerUser);
router.post('/login', auth);
router.get('/customer/:id', getCustomerById);
router.get('/customers', getAllCustomers);


//orders routes
router.post('/addOrder', addOrder);
router.get('/orders', getAllOrders);


//technicians routes
router.post('/technician', addTechnician);
router.get('/technicians', getAllTechnicians);
router.delete('/technician/:id', deleteTechnician);


//services routes
router.post('/service', addService);
router.get('/services', getAllServices);
router.put('/service/:id', updateService);
router.delete('/service/:id', deleteService);



//payment 
router.post('/checkout', paymentApi);



module.exports = router;