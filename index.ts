import express from 'express';
import dotenv from 'dotenv';
import { connectToDb } from './db';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Free Car Market HU – Backend');
});

connectToDb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
