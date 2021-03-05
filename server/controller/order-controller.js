const { Order } = require('../model');



const addOrder = async (req, res) => {

  try {
    let { cost, paymentMethod, service, TechnicianId, CustomerId } = req.body;
    const order = await Order.create({ cost, paymentMethod, service, TechnicianId, CustomerId });
    return res.status(201).send(order);
  } catch (error) {
    return res.status(400).send(error.errors[0].message);
  }
};


const getAllOrders = async (req, res) => {

  try {
    const order = await Order.findAll();
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }

};


module.exports.addOrder = addOrder;
module.exports.getAllOrders = getAllOrders;
