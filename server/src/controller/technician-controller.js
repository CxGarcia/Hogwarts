const { Technician } = require('../model');


const addTechnician = async (req, res) => {

  try {
    let { name, phone, email } = req.body;
    const technician = await Technician.create({ name, phone, email });
    return res.status(201).send(technician);
  } catch (error) {
    return res.status(400).send(error.errors[0].message);
  }
};


const getAllTechnicians = async (req, res) => {

  try {
    const technician = await Technician.findAll({ include: { all: true, nested: true } });
    res.status(200).send(technician);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }

};


const deleteTechnician = async (req, res) => {
  try {
    await Technician.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).send('Technician Deleted');
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }

};


module.exports = { addTechnician, getAllTechnicians, deleteTechnician };

