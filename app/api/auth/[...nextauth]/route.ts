import { connectToDatabase } from '@/lib/db';
import { verifyPassword } from '@/lib/signup/hashPasswd';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface RedirectCallbackParams {
    url: string;
    baseUrl: string;
}

interface CustomUser {
    id: string;
    email: string;
    username?: string;
    password?: string;
    accessToken?: string;
}

export const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'text' },
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
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

                    const isValid = await verifyPassword(credentials.password, user.password || '');

                    if (!isValid) {
                        console.error('Invalid credentials.');
                        return null;
                    }

                    return {
                        id: user._id.toString(),
                        email: user.email,
                        username: user.username,
                    };
                } finally {
                    await client.close();
                }
            }
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async redirect(params: RedirectCallbackParams) {
            const { url, baseUrl } = params;
            return baseUrl + '/dashboard';
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
