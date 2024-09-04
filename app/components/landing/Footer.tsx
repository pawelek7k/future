import { CiCirclePlus } from "react-icons/ci";
import { FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiShare } from "react-icons/hi";
import { IoMdLogIn, IoMdMoon } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { LightLogo } from "../global/Logo";

export const Footer = () => {
  return (
    <footer className="h-screen p-10 sm:p-20 border-t border-sky-950">
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
      <div className="flex justify-normal flex-col sm:justify-between border-t border-sky-950 mt-10 sm:mt-20 sm:p-10 gap-10 sm:flex-row p-4">
        <div className="text-neutral-300">
          <h3 className="text-neutral-100 font-semibold text-xl mb-6">
            Company
          </h3>
          <ul className="flex flex-col gap-6">
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              About us
            </li>
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              News
            </li>
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              Contact
            </li>
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              Support
            </li>
          </ul>
        </div>
        <div className="text-neutral-300 ">
          <h3 className="text-neutral-100 font-semibold text-xl mb-6">
            Company
          </h3>
          <ul className="flex flex-col gap-6">
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              About us
            </li>
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              News
            </li>
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              Contact
            </li>
            <li className="hover:text-sky-950 cursor-pointer transition ease-in-out">
              Support
            </li>
          </ul>
        </div>
        <div className="flex items-end justify-end   flex-col gap-6">
          <LightLogo />
          <p className="text-neutral-300">Contact with us!</p>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare className="w-6 h-6 text-neutral-300 hover:text-sky-950  transition ease-in-out" />
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank">
                <FaXTwitter className="w-6 h-6 text-neutral-300 hover:text-sky-950 transition ease-in-out" />
              </a>
            </li>
            <li>
              <a href="https://pl.pinterest.com/" target="_blank">
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
      </div>
      <div className="flex items-end">
        <p className="text-neutral-300 text-sm">
          <span>&copy; 2024</span> - Future. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
