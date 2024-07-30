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

    } catch (error) { }
};
