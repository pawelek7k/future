import { PasswordChangeForm } from "@/components/profile/PasswordChangeForm";
import { getSession } from "next-auth/react";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next/types";

interface SessionProps {
  session: any;
}

const UserProfilePage = () => {
  const changePasswordHandler = async (passwordData) => {
    const response = await fetch("/api/user/changePassword", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="mt-20">
      <h1>User Profile</h1>
      <p>Welcome, user!</p>
      <PasswordChangeForm onChangePassword={changePasswordHandler} />
    </div>
  );
};

export default UserProfilePage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<SessionProps>> => {
  try {
    const session = await getSession({ req: context.req });
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: { session },
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
