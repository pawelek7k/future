import { connectToDatabase } from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/signup/hashPasswd';
import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../[...nextauth]/route';

export async function PATCH(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        console.log('Session:', session);

        if (!session) {
            return NextResponse.json({ message: 'Not authenticated!' }, { status: 401 });
        }

        const userEmail = session.user?.email;
        const { oldPassword, newPassword } = await req.json();

        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({ email: userEmail });

        if (!user) {
            client.close();
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const currentPassword = user.password;
        const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

        if (!passwordsAreEqual) {
            client.close();
            return NextResponse.json({ message: 'Invalid password.' }, { status: 422 });
        }

        const hashedPassword = await hashPassword(newPassword);
        await usersCollection.updateOne(
            { email: userEmail },
            { $set: { password: hashedPassword } }
        );

        client.close();
        return NextResponse.json({ message: 'Password updated!' }, { status: 200 });

    } catch (error) {
        console.error('Failed to update password:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};
