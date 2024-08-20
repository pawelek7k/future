import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SecondHeading, ThirdHeading } from "../global/Heading";
import { DarkModeSwitch } from "./Darkmode";

export const GlobalSettings: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <DarkModeSwitch />
      <div>
        <div className="w-32 h-32 border border-sky-950 rounded-full"></div>
        <ThirdHeading>display name</ThirdHeading>
        <SecondHeading>{session.user?.username}</SecondHeading>
      </div>
    </>
  );
};
