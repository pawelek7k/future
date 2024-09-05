import Link from "next/link";
import { PrimaryButton } from "../global/Buttons";
import { LightLogo } from "../global/Logo";

export const MarketingNavigation: React.FC = () => {
  return (
    <header className="flex justify-between p-4 fixed top-0 w-full backdrop-blur-md left-0 right-0 z-40 ">
      <LightLogo />
      <div className="w-20">
        <Link href="/login">
          <PrimaryButton>Log in!</PrimaryButton>
        </Link>
      </div>
    </header>
  );
};
