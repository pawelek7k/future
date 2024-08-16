import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export function withAuth<P extends { [key: string]: any; }>(gssp: GetServerSideProps<P>) {
    return async (context: GetServerSidePropsContext) => {
        const session = await getSession(context);

        if (!session) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }

        return await gssp(context);
    };
}
