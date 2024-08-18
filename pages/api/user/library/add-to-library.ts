import { connectToDatabase } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { bookId } = req.body;
    if (!bookId) {
        return res.status(400).json({ message: "Book ID is required" });
    }

    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({ message: 'You need to be logged in to add a book to your library.' });
    }

    const userEmail = session.user?.email;
    if (!userEmail) {
        return res.status(401).json({ message: 'User email not found in session.' });
    }

    try {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');
        const user = await usersCollection.findOne({ email: userEmail });

        if (!user) {
            client.close();
            return res.status(404).json({ message: 'User not found' });
        }

        await usersCollection.updateOne(
            { email: userEmail },
            { $push: { library: bookId } }
        );

        client.close();
        return res.status(200).json({ message: 'Book added to library' });
    } catch (err) {
        console.error('Error adding book to library:', err);
        return res.status(500).json({ message: 'Failed to add book to library' });
    }
};

export default handler;
