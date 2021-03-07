const bcrypt = require('bcrypt');
const { Customer } = require('../model');
const jwt = require('jsonwebtoken');
const { secretToken } = require('../config/db.config');


const registerUser = async (req, res) => {

  try {
    let { name, phone, email, password, location } = req.body;

    //hash the password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    const customer = await Customer.create({ name, phone, email, password, location });
    const token = jwt.sign({ id: customer.dataValues.id }, secretToken);

    res.header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .status(201)
      .send(token);

  } catch (error) {
    res.status(400).send(error);
  }

};



const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findAll({ where: { id } });
    res.status(200).send(customer);
  } catch (error) {
    console.log(error);
    res.status(400).send("something wrong happen");
  }
};

module.exports = { registerUser, getCustomerById };
