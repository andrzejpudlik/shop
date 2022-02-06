import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import productRoute from './routes/product.js'
import cartRoute from './routes/cart.js'
import orderRoute from './routes/order.js'
import stripeRoute from './routes/stripe.js'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

mongoose
  .connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection'))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));