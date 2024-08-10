import { Logo } from "../../components/global/Logo";

export const HeroNavigation: React.FC = () => {
  return (
    <header className="flex justify-evenly p-4 w-full border-b items-center dark:border-b-zinc-800 shadow-lg">
      <Logo />
    </header>
  );
};
