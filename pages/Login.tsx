import { Container } from "@/components/login";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface SessionProps {
  session: Session | null;
}

const LoginPage: React.FC = () => {
  return <Container />;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<SessionProps>> => {
  try {
    const session = await getSession({ req: context.req });

    if (session) {
      return {
        redirect: {
          destination: "/settings",
          permanent: false,
        },
      };
    }

    return {
      props: { session: null },
    };
  } catch (error) {
    console.error("Failed to fetch session:", error);
    return {
      props: {
        session: null,
      },
    };
  }
};

export default LoginPage;
