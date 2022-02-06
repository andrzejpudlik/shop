import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection'))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));