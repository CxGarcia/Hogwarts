const axios = require('axios');

const postOrder = (cost, paymentMethod, TechnicianId, CustomerId, serviceID) => {
  return axios.post('http://localhost:4000/addOrder', {
    cost, paymentMethod, TechnicianId, CustomerId, serviceID
  });
};

export default postOrder;