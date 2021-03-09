const axios = require('axios');


const addCustomer = (name, phone, email, password, location) => {
  return axios.post('http://localhost:4000/signUp', {
    name, phone, email, password, location
  });
};


// const getCustomers = (name, phone, email, password, location) => {
//   let servicesList;
//   await axios('http://localhost:4000/services').then(res => {
//     servicesList = res.data;
//   });
//   return servicesList;
// };



export default addCustomer;


