import Link from "next/link";
import { IoMdMoon } from "react-icons/io";

export const Logo: React.FC = () => (
  <Link href="/home">
    <div className="flex items-center gap-4 justify-center">
      <IoMdMoon className="w-8 h-8" />
      <h1 className="text-lg font-sans tracking-widest hidden lg:block">
        Future
      </h1>
    </div>
  </Link>
);

export const LightLogo: React.FC = () => (
  <Link href="/">
    <div className="flex items-center gap-4 justify-center">
      <IoMdMoon className="w-8 h-8 text-neutral-100" />
      <h1 className="text-3xl font-sans text-neutral-100 tracking-widest hidden fancy lg:block">
        Future
      </h1>
    </div>
  </Link>
);
