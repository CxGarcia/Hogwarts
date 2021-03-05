const dbConfig = require("../config/db.config");
const Stripe = require("stripe");
const stripe = new Stripe(dbConfig.stripeSecret);



const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

const paymentApi = async (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  await stripe.charges.create(body, stripeChargeCallback(res));
}

module.exports = paymentApi;
