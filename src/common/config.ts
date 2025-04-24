import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  NODE_ENV: string;
  PORT: number;
  JWT_SECRET_KEY: string;
  MONGO_CONNECTION_STRING: string;
}

const config: IConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT ? +process.env.PORT : 4000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'secret-key',
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/shop'
};

export default config;