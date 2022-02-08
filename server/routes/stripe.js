import express from 'express';
import Stripe from 'stripe';

const router = express.Router();


router.post('/payment', (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;