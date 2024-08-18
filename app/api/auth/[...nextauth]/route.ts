import { connectToDatabase } from '@/lib/db';
import { verifyPassword } from '@/lib/signup/hashPasswd';
import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface CustomUser extends User {
    id: string;
    email: string;
    username?: string;
    password?: string;
    accessToken?: string;
}

const handler = NextAuth({
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

})

export { handler as GET, handler as POST };

