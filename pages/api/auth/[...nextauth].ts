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
                    console.log("Attempting to authorize with email:", credentials.email);

                    const usersCollection = client.db().collection<User>('users');
                    const user = await usersCollection.findOne({ email: credentials.email });

                    if (!user) {
                        console.error('No user found with the provided email.');
                        throw new Error('No user found with the provided email.');
                    }

                    console.log('User found:', user);

                    const isValid = await verifyPassword(credentials.password, user.password);

                    if (!isValid) {
                        console.error('Invalid credentials.');
                        throw new Error('Invalid credentials.');
                    }

                    console.log('User authorized:', user.email);

                    return { email: user.email };
                } finally {
                    await client.close();
                }
            }

        })
    ],
    pages: {
        signIn: '/login',
    }
} as NextAuthOptions);
