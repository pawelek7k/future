"use client";
import { useRouter } from "@/navigation";
import { DarkModeSwitch } from "../Darkmode";
import { LangSwitcher } from "../LangSwitcher";
import { Tile } from "./Tile";

export const Tiles = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => router.push(path);

  return (
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
        <Tile rounded="right">
          <LangSwitcher />
        </Tile>
      </ul>
    </div>
  );
};
