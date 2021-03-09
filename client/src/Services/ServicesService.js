const axios = require('axios');

const postService = (name) => {
  return axios.post('http://localhost:4000/service', { name });
};

const getServices = async () => {
  try {

    let servicesList;
    await axios('http://localhost:4000/services').then(res => {
      servicesList = res.data;
    });
    return servicesList;

  } catch (error) {
    console.log(error);
  }
};



const updateServiceList = async (id, name) => {
  try {

    return await axios.put(`http://localhost:4000/service/${id}`, { name });
  } catch (error) {
    console.log(error);
  }
};


const deleteService = async (id) => {
  try {

    return await axios.delete(`http://localhost:4000/service/${id}`);
  } catch (error) {
    console.log(error);

  }
};


module.exports = { postService, getServices, updateServiceList, deleteService };