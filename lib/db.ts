import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../env/.env') })

const mongoUri = process.env.MONGODB_CONNECT

if (!mongoUri) {
    throw new Error('MONGODB_CONNECT environment variable is not defined')
}

export const connectToDatabse = async (): Promise<MongoClient> => {
    try {
        const client = await MongoClient.connect(mongoUri)
        return client
    } catch (e) {
        console.error('Failed to connect to database', e)
        throw e
    }


}