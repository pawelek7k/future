import { MongoClient } from 'mongodb';

export const mongoUri = process.env.MONGODB_CONNECT as string;

if (!mongoUri) {
    throw new Error('MONGODB_CONNECT environment variable is not defined');
}

let client: MongoClient | null = null;

export const connectToDatabase = async (): Promise<MongoClient> => {
    if (client) {
        return client;
    }

    try {
        client = new MongoClient(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });

        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (e) {
        console.error('Failed to connect to database', e);
        throw e;
    }
};
