import { GeneralComponent } from "@/components/settings/General";
import { NotificationContainer } from "@/components/settings/Notification";
import { ProfileContainer } from "@/components/settings/Profile";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PasswordChangeForm } from "../../components/settings/Security/PasswordChangeForm";
import { Sidebar } from "../../components/settings/Sidebar";
import { changePasswordHandler } from "../../lib/settings/userService";

interface SessionProps {
  session: Session | null;
}

const SettingPage = ({ session }: SessionProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handlePasswordChange = async (passwordData: {
    oldPassword: string;
    newPassword: string;
  }) => {
    try {
      await changePasswordHandler(passwordData);
      setSuccess("Password changed successfully!");
      setError(null);
    } catch (error) {
      setSuccess(null);
      setError("Failed to change password. Please try again.");
    }
  };

  const renderContent = () => {
    switch (id) {
      case "profile":
        return <ProfileContainer />;
      case "account":
        return <div>Account settings content...</div>;
      case "notifications":
        return <NotificationContainer />;
      case "security":
        return (
          <>
            <PasswordChangeForm onChangePassword={handlePasswordChange} />
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
          </>
        );
      case "privacy":
        return <div>Privacy settings content...</div>;
      case "general":
        return <GeneralComponent />;
      default:
        return <div>Unknown settings section</div>;
    }
  };

  return (
    <div className="flex bg-bg-settings dark:bg-dark-bg-settings h-screen">
      <Sidebar />
      <div className="flex-1 p-4">{renderContent()}</div>
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

export default SettingPage;
