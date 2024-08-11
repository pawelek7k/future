import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HeroLine } from "../global/line";

export const SocialContainer = () => {
  return (
    <div className=" absolute top-0 left-0 p-4">
      <ul className="flex flex-col gap-6 items-center justify-center">
        <li>
          <HeroLine />
        </li>
        <li>
          <FaInstagram className="w-8 h-8 text-neutral-100 hover:text-neutral-100/80 hover:cursor-pointer" />
        </li>
        <li>
          <FaFacebookSquare className="w-8 h-8 text-neutral-100 hover:text-neutral-100/80 hover:cursor-pointer" />
        </li>
        <li>
          <FaXTwitter className="w-8 h-8 text-neutral-100 hover:text-neutral-100/80 hover:cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};
