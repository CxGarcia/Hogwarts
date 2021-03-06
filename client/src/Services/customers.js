const axios = require('axios');


const addCustomer = (name, phone, email, password, location) => {
  return axios.post('http://localhost:4000/signUp', {
    name, phone, email, password, location
  });
};

const getCustomerById = () => {
  return axios.get('http://localhost:4000/customer/1');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addCustomer, getCustomerById };

