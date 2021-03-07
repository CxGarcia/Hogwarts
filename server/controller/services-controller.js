const { Service } = require('../model');


const addService = async (req, res) => {

  try {
    let { name } = req.body;
    const service = await Service.create({ name });
    return res.status(201).send(service);
  } catch (error) {
    return res.status(400).send(error.errors[0].message);
  }
};


const getAllServices = async (req, res) => {

  try {
    const service = await Service.findAll();
    res.status(200).send(service);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }

};


const updateService = async (req, res) => {
  try {
    await Service.update({ name: req.body.name }, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).send('Service Updated');
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }

};


const deleteService = async (req, res) => {
  try {
    await Service.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).send('Service Deleted');
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }

};


module.exports = { addService, getAllServices, updateService, deleteService };

