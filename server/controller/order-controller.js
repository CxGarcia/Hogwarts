const { Order } = require('../model');


const addOrder = async (req, res) => {

  try {
    let { cost, paymentMethod, TechnicianId, CustomerId, serviceID } = req.body;
    const order = await Order.create({ cost, paymentMethod, TechnicianId, CustomerId, serviceID });
    return res.status(201).send(order);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.errors[0].message);
  }
};


const getAllOrders = async (req, res) => {

  try {
    const order = await Order.findAll({ include: { all: true, nested: true } });
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }

};



module.exports = { addOrder, getAllOrders };

