import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import 'express-async-errors';
import sequelize from './config/db.config';
import router from './routes';
import errorMiddleware from './middlewares/error.middleware';

config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.use(errorMiddleware);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err: Error) => {
    console.log('Error: ' + err);
  });

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err: Error) => {
    console.log('Failed to sync db: ' + err.message);
  });
