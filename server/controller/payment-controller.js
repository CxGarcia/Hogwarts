const Stripe = require("stripe");
const dbConfig = require("../config/db.config");
const stripe = new Stripe(dbConfig.stripeSecret);



const pay = async (req, res) => {

  const { id, amount, description } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description,
      payment_method: id,
      confirm: true
    });

    console.log(payment);

    return res.status(200).json({
      confirm: "abc123"
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message
    });
  }
};

module.exports = pay;