"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkModeSwitch: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    const resolvedTheme =
      theme === "system" ? systemTheme ?? "light" : theme ?? "light";
    setCurrentTheme(resolvedTheme);
  }, [systemTheme, theme]);

  return (
    <div>
      <button
        className="uppercase text-xs font-semibold w-24 h-24"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
        {currentTheme}
      </button>
    </div>
  );
};
