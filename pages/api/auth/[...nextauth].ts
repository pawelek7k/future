import { connectToDatabase } from '@/lib/db';
import { verifyPassword } from '@/lib/signup/auth';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

interface CustomUser {
    id: string;
    email: string;
    username?: string;
    password?: string;
}

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
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
                console.log('Credentials:', credentials);

                if (!credentials || !credentials.email || !credentials.password) {
                    console.error('Credentials are missing.');
                    return null;
                }

                const client = await connectToDatabase();

                try {
                    console.log("Attempting to authorize with email:", credentials.email);

                    const usersCollection = client.db().collection<CustomUser>('users');
                    const user = await usersCollection.findOne({ email: credentials.email });

                    if (!user) {
                        console.error('No user found with the provided email.');
                        return null;
                    }

                    console.log('User found:', user);

                    const isValid = await verifyPassword(credentials.password, user.password || '');

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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = (user as CustomUser).id;
                token.email = (user as CustomUser).email;
                token.username = (user as CustomUser).username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id as string,
                    email: token.email as string,
                    username: token.username as string,
                };
            }
            return session;
        },
    },
} as NextAuthOptions);
