import { PasswordChangeForm } from "@/components/profile/PasswordChangeForm";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next/types";

interface SessionProps {
  session: Session | null;
}

const UserProfilePage = ({ session }: SessionProps) => {
  const changePasswordHandler = async (passwordData: {
    oldPassword: string;
    newPassword: string;
  }) => {
    try {
      const response = await fetch("/api/user/change-password", {
        method: "PATCH",
        body: JSON.stringify(passwordData),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status} - ${errorMessage}`
        );
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  return (
    <div className="mt-20">
      <h1>User Profile</h1>
      <p>Welcome, {session?.user?.email}!</p>
      <PasswordChangeForm onChangePassword={changePasswordHandler} />
    </div>
  );
};

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

export default UserProfilePage;
