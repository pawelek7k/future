import Link from "next/link";
import { IoMdMoon } from "react-icons/io";

export const Logo: React.FC = () => (
  <Link href="/home" passHref>
    <div className="flex items-center gap-4 justify-center">
      <IoMdMoon className="w-8 h-8" aria-hidden="true" />
      <h1 className="text-lg font-sans tracking-widest hidden lg:block font-semibold">
        Future
      </h1>
    </div>
  </Link>
);
