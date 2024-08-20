import { useTheme } from "next-themes";
import { PrimaryButton } from "../global/Buttons";

export const DarkModeSwitch: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(currentTheme);
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
