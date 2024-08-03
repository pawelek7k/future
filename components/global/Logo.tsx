import Link from "next/link";
import { IoMdMoon } from "react-icons/io";

export const Logo: React.FC = () => (
  <Link href="/">
    <div className="flex items-center gap-4 justify-center">
      <IoMdMoon className="w-8 h-8" />
      <h1 className="text-lg font-sans tracking-widest hidden fancy lg:block">
        Future
      </h1>
    </div>
  </Link>
);
