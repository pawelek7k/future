import { connectToDatabase } from "@/lib/db";
import Joi from "joi";
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from "next";

const contentSchema = Joi.object({
    content: Joi.string().required()
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id } = req.query;
    const { error, value } = contentSchema.validate(req.body);

    if (error) {
        console.log("Validation error:", error.details);
        return res.status(400).json({ message: error.details[0].message });
    }

    const { content } = value;

    try {
        const client = await connectToDatabase();
        const db = client.db();
        const booksCollection = db.collection('books');

        console.log(`Updating book with ID: ${id}`);
        console.log(`New content: ${content}`);

        const result = await booksCollection.updateOne(
            { _id: new ObjectId(id as string) },
            { $set: { content } }
        );

        console.log('Update result:', result);

        client.close();

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Book not found or no changes made' });
        }

        res.status(200).json({ message: 'Content updated!' });
    } catch (err) {
        console.error('Error updating content:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
