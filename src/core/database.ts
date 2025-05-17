import { Db, MongoClient } from 'mongodb';
import { DB_MONGO_NAME, DB_MONGO_URI } from './config.global';

let client: MongoClient;
let dbInstance: Db;

const connectToDatabase = async (): Promise<Db> => {
    if (!dbInstance) {
        client = new MongoClient(DB_MONGO_URI);
        await client.connect();
        console.log(DB_MONGO_NAME, "mongo-db-connected");
        dbInstance = client.db(DB_MONGO_NAME);
    }
    return dbInstance;
};

export { connectToDatabase };