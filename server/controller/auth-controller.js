const bcrypt = require('bcrypt');
const { Customer } = require('../model');
const jwt = require('jsonwebtoken');
const { secretToken } = require('../config/db.config');

const auth = async (req, res) => {

  //validate if user exist or not 
  let customer = await Customer.findAll({ where: { email: req.body.email } });
  if (!customer.length) return res.status(400).send("Invalid email or password.");

  //validate  password after
  const validPassword = await bcrypt.compare(req.body.password, customer[0].password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = jwt.sign({ id: customer[0].dataValues.id }, secretToken);

  res.send(token);

};


module.exports = auth;
