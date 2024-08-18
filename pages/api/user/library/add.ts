// import { connectToDatabase } from '@/lib/db';
// import { ObjectId } from 'mongodb';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/react';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'PUT') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const { bookId } = req.body;
//     const session = await getSession({ req });
//     console.log('Session:', session);

//     if (!session) {
//         return res.status(401).json({ message: "Unauthorized" });
//     }

//     if (!bookId) {
//         return res.status(400).json({ message: "Book ID is required" });
//     }

//     try {
//         const client = await connectToDatabase();
//         const db = client.db();
//         const usersCollection = db.collection('users');

//         await usersCollection.updateOne(
//             { email: session.user.email },
//             { $addToSet: { library: bookId } }
//         );

//         client.close();
//         return res.status(200).json({ message: "Book added to library" });
//     } catch (err) {
//         console.error("Error adding book to library:", err);
//         return res.status(500).json({ message: "Failed to add book to library" });
//     }
// }
