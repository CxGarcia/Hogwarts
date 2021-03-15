import express from 'express';
import { Order } from '../model';

const addOrder = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const {
      cost,
      paymentMethod,
      technicianId,
      customerId,
      serviceId,
    } = req.body;

    const order = await Order.create({
      cost,
      paymentMethod,
      technicianId,
      customerId,
      serviceId,
    });
    res.status(201).send(order);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.errors[0].message);
  }
};

const getAllOrders = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const order = await Order.findAll({ include: { all: true, nested: true } });
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

const getOrdersByCustomerId = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: {
        customerId: id,
      },
      include: { all: true, nested: true },
    });
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
};

export { addOrder, getAllOrders, getOrdersByCustomerId };
