import { connectToDatabase } from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/signup/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PATCH') {
        return
    }

    try {
        const session = await getSession({ req })

        if (!session) {
            res.status(401).json({ message: 'Not authenticated!' })
            return
        }

        const userEmail = session.user?.email
        const oldPassword = req.body.oldPassword
        const newPassword = req.body.newPassword

        const client = await connectToDatabase()
        const usersCollection = client.db().collection('users')

        const user = await usersCollection.findOne({ email: userEmail })

        if (!user) {
            res.status(404).json({ message: 'User not found' })
            client.close()
            return
        }

        const currentPassword = user.password

        const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword)

        if (!passwordsAreEqual) {
            res.status(422).json({ message: 'Invalid password.' })
            client.close()
            return
        }

        const hashedPassword = await hashPassword(newPassword)

        const result = await usersCollection.updateOne(
            { email: userEmail },
            { $set: { password: newPassword } })

        client.close()
        res.status(200).json({ message: 'Password updated!' })

    } catch (error) { }
};
