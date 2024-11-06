import { FirstHeading } from "@/app/components/global/headings/FirstHeading";
import { UserProfile } from "@/app/components/settings/UserProfile";
import { connectToDatabase } from "@/lib/db";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata = {
  title: "Settings - Future",
  description: "Configure your settings here",
};

interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  let user;
  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");
    user = await usersCollection.findOne({ email: session.user?.email });
  } catch (error) {
    console.error("Error retrieving user data:", error);
  }
  return (
    <section className="h-screen">
      <FirstHeading>Your profile</FirstHeading>
      <UserProfile username={user?.username} email={user?.email} />
      {children}
    </section>
  );
};

export default SettingsLayout;
