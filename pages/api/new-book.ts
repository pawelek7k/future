import { connectToDatabase } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const data = req.body


    const client = await connectToDatabase();
    const db = client.db();
    const booksCollection = db.collection('books')

    const result = await booksCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: 'Book created!' })
}

export default handler