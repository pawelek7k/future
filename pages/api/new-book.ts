import { connectToDatabase } from "@/lib/db";
import { bookGenres } from "@/lib/routes";
import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";

const validGenres = bookGenres.map(genre => genre.name);

const bookSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    cover: Joi.string().uri().required(),
    description: Joi.string().max(1000).required(),
    forAdult: Joi.boolean().required(),
    genre: Joi.string().valid(...validGenres).required(),
    tags: Joi.array().items(Joi.string().min(1)).required(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { error, value } = bookSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const data = value;

    try {
        const client = await connectToDatabase();
        const db = client.db();
        const booksCollection = db.collection('books');

        const result = await booksCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Book created!', id: result.insertedId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default handler;
