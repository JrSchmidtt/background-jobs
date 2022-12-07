import 'dotenv/config';
import express from 'express';
import UserController from './controllers/UserController';

const app = express();

app.use(express.json());

app.post('/users', UserController.store)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});