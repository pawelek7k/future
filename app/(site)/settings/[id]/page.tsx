"use client";

import { AccountContainer } from "@/app/components/settings/Account";
import { Sidebar } from "@/app/components/settings/Sidebar";
import { useSearchParams } from "next/navigation";

const SettingPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const renderContent = () => {
    switch (id) {
      case "account":
        return <AccountContainer />;
      default:
        return <div>Unknown settings section</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">{renderContent()}</div>
    </div>
  );
};

export default SettingPage;