import { LightLogo } from "../global/Logo";

export const MarketingNavigation: React.FC = () => {
  return (
    <header className="flex justify-between p-4 fixed top-0 w-full backdrop-blur-md left-0 right-0 z-40 ">
      <LightLogo />
    </header>
  );
};
