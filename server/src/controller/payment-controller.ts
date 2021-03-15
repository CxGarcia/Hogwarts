import express from 'express';
import Stripe from 'stripe';

const STRIPE_KEY: string = process.env.STRIPE_KEY || '';

const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: '2020-08-27',
  typescript: true,
});

const paymentApi = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  try {
    const result = await stripe.charges.create(body);
    res.status(200).send({ success: result });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export default paymentApi;
