import express from 'express';
import { Technician } from '../model';

const addTechnician = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { name, phone, email } = req.body;
    const technician = await Technician.create({ name, phone, email });
    res.status(201).send(technician);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

const getAllTechnicians = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const technician = await Technician.findAll({
      include: { all: true, nested: true },
    });
    res.status(200).send(technician);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

const deleteTechnician = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    await Technician.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send('Technician Deleted');
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

export { addTechnician, getAllTechnicians, deleteTechnician };
