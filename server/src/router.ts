import express from 'express';

import authMiddleware from './middleware/auth';
import paymentApi from './controller/payment-controller';
import auth from './controller/auth-controller';
import {
  addOrder,
  getAllOrders,
  getOrdersByCustomerId,
} from './controller/order-controller';

import {
  registerUser,
  getCustomerById,
  getAllCustomers,
} from './controller/customer-controller';

import {
  addTechnician,
  getAllTechnicians,
  deleteTechnician,
} from './controller/technician-controller';

import {
  addService,
  getAllServices,
  updateService,
  deleteService,
} from './controller/services-controller';

const router = express.Router();
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
router.get('/orders/:id', getOrdersByCustomerId);

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

export default router;
