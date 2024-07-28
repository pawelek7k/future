import { connectToDatabase } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await connectToDatabase();
                const usersCollection = client.db().collection('users');

                try {
                    const user = await usersCollection.findOne({ email: credentials.email });

                    if (!user) {
                        throw new Error('No user found with the given email.');
                    }

                    client.close();

                    return { id: user._id, email: user.email, name: user.username };
                } catch (error) {
                    client.close();
                    throw new Error(error.message || 'Internal server error.');
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/login',
    },
});
