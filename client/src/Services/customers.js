const axios = require('axios');


const addCustomer = (name, phone, email, password, location) => {
  return axios.post('http://localhost:4000/signUp', {
    name, phone, email, password, location
  });
};


const verifyCustomer = (email, password) => {
  return axios.post('http://localhost:4000/login', {
    email, password
  })
    .then((response) => {
      console.log(response);
      return response;
    });

};

export { addCustomer, verifyCustomer };
