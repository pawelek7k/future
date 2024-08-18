import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface User extends DefaultUser {
        id: string;
        username?: string;
        accessToken?: string;
    }

    interface Session extends DefaultSession {
        user: {
            id: string;
            email: string;
            username?: string;
            accessToken?: string;
        } & DefaultSession['user'];
        accessToken?: string;
    }

    interface JWT {
        id: string;
        email: string;
        username?: string;

    }
    interface Token {
        accessToken?: string;
    }
}
