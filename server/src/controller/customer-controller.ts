import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Customer } from '../model/index';

const secretToken: string = process.env.SECRET_TOKEN || '';

const registerUser = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { name, phone, email, location } = req.body;
    let { password } = req.body;

    //hash the password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    const customer = await Customer.create({
      name,
      phone,
      email,
      password,
      location,
    });

    const token = jwt.sign({ id: customer.id }, secretToken);

    res
      .header('x-auth-token', token)
      .header('access-control-expose-headers', 'x-auth-token')
      .status(201)
      .send(token);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCustomerById = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const customer = await Customer.findAll({ where: { id } });
    res.status(200).send(customer);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getAllCustomers = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const customer = await Customer.findAll({
      include: { all: true, nested: true },
    });
    res.status(200).send(customer);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export { registerUser, getCustomerById, getAllCustomers };
