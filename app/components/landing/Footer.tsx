import { CiCirclePlus } from "react-icons/ci";
import { FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiShare } from "react-icons/hi";
import { IoMdLogIn, IoMdMoon } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { LightLogo } from "../global/Logo";

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
      <div className="flex items-end justify-end p-10 border-t border-sky-950 mt-20 flex-col">
        <LightLogo />
        <ul className="flex flex-col gap-6 mt-6">
          <li>
            <a href="">
              <FaFacebookSquare className="w-6 h-6 text-neutral-300 hover:text-sky-950  transition ease-in-out" />
            </a>
          </li>
          <li>
            <a href="">
              <FaXTwitter className="w-6 h-6 text-neutral-300 hover:text-sky-950 transition ease-in-out" />
            </a>
          </li>
          <li>
            <a href="">
              <FaPinterest className="w-6 h-6 text-neutral-300 hover:text-sky-950  transition ease-in-out" />
            </a>
          </li>
          <li>
            <a href="">
              <HiShare className="w-6 h-6 text-neutral-300 hover:text-sky-950  transition ease-in-out" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
