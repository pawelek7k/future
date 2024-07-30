import { connectToDatabase } from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/signup/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PATCH') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const session = await getSession({ req })

        if (!session) {
            res.status(401).json({ message: 'Not authenticated!' })
            return
        }

        const userEmail = session.user?.email
        const { oldPassword, newPassword } = req.body;

        const client = await connectToDatabase()
        const usersCollection = client.db().collection('users')

        const user = await usersCollection.findOne({ email: userEmail })

        if (!user) {
            client.close()
            return res.status(404).json({ message: 'User not found' })
        }

        const currentPassword = user.password

        const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword)

        if (!passwordsAreEqual) {
            client.close()
            return res.status(422).json({ message: 'Invalid password.' })
        }

        const hashedPassword = await hashPassword(newPassword)

        await usersCollection.updateOne(
            { email: userEmail },
            { $set: { password: hashedPassword } })

        client.close()
        res.status(200).json({ message: 'Password updated!' })

    } catch (error) {
        console.error('Failed to update password:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
