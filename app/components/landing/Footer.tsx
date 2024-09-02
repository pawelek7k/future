import { CiCirclePlus } from "react-icons/ci";
import { IoMdLogIn, IoMdMoon } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="h-screen p-20 border-t border-sky-950">
      <div className="flex justify-start items-center gap-2">
        <ul className="flex flex-col gap-6">
          <li className="flex gap-2">
            <IoMdMoon className="w-6 h-6 text-neutral-100" />
            <span className="text-neutral-300 font-semibold">
              {" "}
              - Create your way with us!
            </span>
          </li>
          <li>
            <IoMdLogIn className="w-6 h-6 text-neutral-300" />
          </li>
          <li>
            <CiCirclePlus className="w-6 h-6 text-neutral-300" />
          </li>
          <li>
            <IoLibrary className="w-6 h-6 text-neutral-300" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
