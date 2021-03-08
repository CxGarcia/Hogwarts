const axios = require('axios');

const verifyCustomer = (email, password) => {
  return axios.post('http://localhost:4000/login', {
    email, password
  })
    .then((response) => {
      return response;
    });

};

export { verifyCustomer };
