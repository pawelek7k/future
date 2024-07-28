import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_CONNECT

if (!mongoUri) {
    throw new Error('MONGODB_CONNECT environment variable is not defined')
}

export const connectToDatabase = async (): Promise<MongoClient> => {

    try {
        const client = await MongoClient.connect(mongoUri)
        return client
    } catch (e) {
        console.error('Failed to connect to database', e)
        throw e
    }

}