
import { DefaultUser, DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface User extends DefaultUser {
        id: string;
        username?: string;
    }

    interface Session extends DefaultSession {
        user: {
            id: string;
            email: string;
            username?: string;
        } & DefaultSession['user'];
    }

    interface JWT {
        id: string;
        email: string;
        username?: string;
    }
}
