const bcrypt = require('bcrypt');
const Customer = require('../model/customer-model');


const registerUser = async (req, res) => {



  try {
    let { name, phone, email, password, location } = req.body;
    //hash the password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const customer = await Customer.create({
      name, phone, email, password, location
    });
    res.status(201).send(customer);

  } catch (error) {

    res.status(400).send(error.errors[0].message);
  }


};


module.exports = registerUser;
