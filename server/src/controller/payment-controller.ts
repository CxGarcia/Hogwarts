import express from 'express';
import { RequestOptions } from 'node:https';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: '2020-08-27',
  typescript: true,
});

const paymentApi = async (req: express.Request, res: express.Response) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  try {
    const result = await stripe.charges.create(body);
    res.status(200).send({ success: result })
  } catch (error) {
    res.status(500).send({ error: error })
  }

};

export default paymentApi;
