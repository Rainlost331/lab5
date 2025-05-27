import * as dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV: string = process.env['NODE_ENV'] || 'development';
export const PORT: number = parseInt(process.env['PORT'] ?? '4000', 10);
export const JWT_SECRET_KEY: string = process.env['JWT_SECRET_KEY'] || 'secret-key';
export const MONGO_CONNECTION_STRING: string = process.env['MONGO_CONNECTION_STRING'] || 'your-mongo-db-connection-string';