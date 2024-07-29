import { connectToDatabase } from '@/lib/db';
import { verifyPassword } from '@/lib/signup/auth';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface Credentials {
    email: string;
    password: string;
}

interface User {
    email: string;
    username?: string
    password: string;
}

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials: Credentials) {
                const client = await connectToDatabase();

                try {
                    const usersCollection = client.db().collection<User>('users');
                    const user = await usersCollection.findOne({ email: credentials.email });

                    if (!user) {
                        throw new Error('No user found with the provided email.');
                    }

                    const isValid = await verifyPassword(credentials.password, user.password);

                    if (!isValid) {
                        throw new Error('Invalid credentials.');
                    }

                    return { email: user.email };
                } finally {

                    await client.close();
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
        error: '/auth/error',
    }
} as NextAuthOptions);
