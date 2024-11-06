"use client";
import { useRouter } from "@/navigation";
import { DarkModeSwitch } from "./Darkmode";
import { Tile } from "./Tile";
import { ImagePicker } from "./UserImgPicker";

interface Props {
  username: string;
  email: string;
}

export const UserProfile: React.FC<Props> = ({ username, email }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="max-w-48 text-center">
      <div className="flex flex-col gap-2 mt-2 items-center justify-center">
        <ImagePicker />
        <h2 className="text-lg">{username || email.split("@")[0]}</h2>
        <h3 className="text-sky-950 dark:text-rose-100">{email}</h3>
      </div>
      <div className="mt-6">
        <ul className="flex items-center justify-center pb-6 border-b border-sky-950 dark:border-rose-950">
          <Tile
            label="Global"
            onClick={() => handleNavigation("/settings/global")}
            rounded="left"
          />
          <Tile
            label="Change Password"
            onClick={() => handleNavigation("/settings/change-password")}
            rounded="right"
          />
        </ul>
        <ul className="flex pt-6">
          <Tile rounded="left">
            <DarkModeSwitch />
          </Tile>
          <Tile label="ENG" rounded="right" />
        </ul>
      </div>
    </div>
  );
};
