import { connectToDatabase } from '@/lib/db';
import { user } from '@nextui-org/theme';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // const session = await getSession({ req });


    // if (!session) {
    //     console.error("No session found");
    //     return res.status(401).json({ message: "Not authenticated" });
    // }

    const { bookId } = req.body;

    if (!bookId) {
        return res.status(400).json({ message: "Book ID is required" });
    }

    try {
        const client = await connectToDatabase();
        const db = client.db();
        const usersCollection = db.collection('users');

        await usersCollection.updateOne(
            { email: user?.email },
            { $addToSet: { library: bookId } }
        );

        client.close();
        return res.status(200).json({ message: "Book added to library" });
    } catch (err) {
        console.error("Error adding book to library:", err);
        return res.status(500).json({ message: "Failed to add book to library" });
    }
}
