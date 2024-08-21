import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SecondHeading } from "../global/Heading";
import { DarkModeSwitch } from "./Darkmode";

export const GlobalSettings: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <DarkModeSwitch />
      <div className="flex  items-start  justify-center gap-20">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 border border-sky-950 rounded-full"></div>
          <div className="text-center flex flex-col gap-2">
            <SecondHeading>display name</SecondHeading>
            <p>{session.user?.username}</p>
          </div>
        </div>
        <div>
          <ul className="flex w-96 justify-between pt-10">
            <li>
              <button className="flex flex-col items-center">
                <span>Work:</span>
                <span>0</span>
              </button>
            </li>
            <li>
              <button className="flex flex-col items-center">
                <span>Followers:</span>
                <span>0</span>
              </button>
            </li>
            <li>
              <button className="flex flex-col items-center">
                <span>Following:</span>
                <span>0</span>
              </button>
            </li>
          </ul>
        </div>
        {/* <p>User Description:</p> */}
      </div>
    </>
  );
};
