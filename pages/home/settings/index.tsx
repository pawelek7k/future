import { Sidebar } from "@/app/components/settings/Sidebar";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Head from "next/head";

interface SessionProps {
  session: Session | null;
}

const SettingsPage = ({ session }: SessionProps) => {
  // const changePasswordHandler = async (passwordData: {
  //   oldPassword: string;
  //   newPassword: string;
  // }) => {
  //   try {
  //     console.log(passwordData);
  //     const response = await fetch("/api/user/change-password", {
  //       method: "PATCH",
  //       body: JSON.stringify(passwordData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     if (!response.ok) {
  //       const errorMessage = await response.text();
  //       throw new Error(
  //         `HTTP error! status: ${response.status} - ${errorMessage}`
  //       );
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.error("Error changing password:", error);
  //   }
  // };

  return (
    <>
      <Head>
        <title>Future - Zarządzaj swoimi ustawieniami!</title>
      </Head>
      <section className="h-screen">
        <Sidebar />
        {/* <div className="">
        <div>
          {" "}
          <h1 className="text-2xl">User Profile</h1>
          <p>Welcome, {session?.user?.email}!</p>
        </div>

        <PasswordChangeForm onChangePassword={changePasswordHandler} />
      </div> */}
      </section>
    </>
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

export default SettingsPage;
