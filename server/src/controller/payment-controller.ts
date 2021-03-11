import express from 'express';
import { RequestOptions } from 'node:https';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: '2020-08-27',
  typescript: true,
});

type TnestedCallbackFn = (
  stripeErr: Stripe.StripeError,
  stripeRes: Stripe.Charge
) => any;


function stripeChargeCallback (res: express.Response): TnestedCallbackFn{
  return function (  stripeErr: Stripe.StripeAPIError, stripeRes: Stripe.Charge) {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  }
}
const paymentApi = async (req: express.Request, res: express.Response) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  //TODO - research
  await stripe.charges.create(body, stripeChargeCallback(res));
};

export default paymentApi;
