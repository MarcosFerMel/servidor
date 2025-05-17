import * as dotenv from 'dotenv';

dotenv.config();

export const DB_MONGO_URI = process.env.DB_MONGO_URI || 'DB_MONGO_URI';
export const DB_MONGO_NAME = process.env.DB_MONGO_NAME || 'DB_MONGO_NAME';