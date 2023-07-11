import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(
  process.env.POSTGRESQL_DATABASE,
  process.env.POSTGRESQL_USER,
  process.env.POSTGRESQL_PASSWORD,
  {
    host: process.env.POSTGRESQL_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
