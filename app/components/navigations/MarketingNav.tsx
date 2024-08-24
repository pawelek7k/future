import { Logo } from "../global/Logo";

export const MarketingNavigation: React.FC = () => {
  return (
    <header className="flex justify-between p-4 w-full fixed z-40  backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-zinc-800 shadow-lg">
      <Logo />
    </header>
  );
};
