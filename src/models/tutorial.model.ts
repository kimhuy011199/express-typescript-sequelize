import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config';

const Tutorial = sequelize.define('tutorial', {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
});

export default Tutorial;
