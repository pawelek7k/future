import { ProfileContainer } from "@/components/settings/Profile";
import { useRouter } from "next/router";
import { useState } from "react";
import { PasswordChangeForm } from "../../components/settings/Security/PasswordChangeForm";
import { Sidebar } from "../../components/settings/Sidebar";
import { changePasswordHandler } from "../../lib/settings/userService";

const SettingPage = () => {
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
        return <div>Notifications settings content...</div>;
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
        return <div>General settings content...</div>;
      default:
        return <div>Unknown settings section</div>;
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 mt-20">{renderContent()}</div>
    </div>
  );
};

export default SettingPage;
