"use client";
import { PrimaryButton } from "@/app/components/global/buttons";
import { useTheme } from "next-themes";

export const Button: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="w-40">
      <PrimaryButton
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        Toggle Mode
      </PrimaryButton>
    </div>
  );
};
