import { FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Socials: React.FC = () => {
  return (
    <ul className="flex gap-10 md:items-center md:mt-10 mb-10 md:mb-0 justify-center">
      <li className="rounded-full p-3 border border-rose-950">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookSquare className="w-6 h-6 text-neutral-100 hover:text-neutral-300 transition ease-in-out" />
        </a>
      </li>
      <li className="rounded-full p-3 border border-rose-950">
        <a href="https://x.com/" target="_blank">
          <FaXTwitter className="w-6 h-6 text-neutral-100 hover:text-neutral-300 transition ease-in-out" />
        </a>
      </li>
      <li className="rounded-full p-3 border border-rose-950">
        <a href="https://pl.pinterest.com/" target="_blank">
          <FaPinterest className="w-6 h-6 text-neutral-100 hover:text-neutral-300 transition ease-in-out" />
        </a>
      </li>
    </ul>
  );
};
