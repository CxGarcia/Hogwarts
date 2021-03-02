const dbConnection = require('../db');

const registerUser = (req, res) => {

  let sql = `INSERT INTO customers(customer_name, location , phone ,email ,customer_password) VALUES (?)`;

  let { customer_name, location, phone, email, customer_password } = req.body;
  let values = [customer_name, location, phone, email, customer_password];

  dbConnection.query(sql, [values], function (err, data, fields) {

    if (err) return res.status(400).send(err.sqlMessage);
    res.status(201).send(JSON.stringify(data.insertId));

  });

};


module.exports = registerUser;
