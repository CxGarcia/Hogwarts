const axios = require('axios');

const postOrder = (cost, paymentMethod, service, TechnicianId, CustomerId) => {
  return axios.post('http://localhost:4000/addOrder', {
    cost, paymentMethod, service, TechnicianId, CustomerId
  });
};

export default postOrder;