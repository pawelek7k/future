import { connectToDatabase } from '@/lib/db';
import { verifyPassword } from '@/lib/signup/auth';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
    id: string;
    email: string;
    username?: string;
    password: string;
}

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    console.error('Credentials are missing.');
                    return null;
                }

                const client = await connectToDatabase();

                try {
                    console.log("Attempting to authorize with email:", credentials.email);

                    const usersCollection = client.db().collection<User>('users');
                    const user = await usersCollection.findOne({ email: credentials.email });

                    if (!user) {
                        console.error('No user found with the provided email.');
                        return null;
                    }

                    console.log('User found:', user);

                    const isValid = await verifyPassword(credentials.password, user.password);

                    if (!isValid) {
                        console.error('Invalid credentials.');
                        return null;
                    }

                    console.log('User authorized:', user.email);

                    return { id: user.id, email: user.email, username: user.username };
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
