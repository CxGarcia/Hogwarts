import express from 'express';
// import Service from '../model/services-model';
import { Service } from '../model/index';

const addService = async (req: express.Request, res: express.Response) => {
  try {
    let { name } = req.body;
    const service = await Service.create({ name });
    res.status(201).send(service);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getAllServices = async (req: express.Request, res: express.Response) => {
  try {
    const service = await Service.findAll();
    res.status(200).send(service);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

const updateService = async (req: express.Request, res: express.Response) => {
  try {
    await Service.update(
      { name: req.body.name },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).send('Service Updated');
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

const deleteService = async (req: express.Request, res: express.Response) => {
  try {
    await Service.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send('Service Deleted');
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

export { addService, getAllServices, updateService, deleteService };
