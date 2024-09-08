import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";

interface socialsItem {
  icon: JSX.Element;
  link: string;
}

export const socials: socialsItem[] = [
  {
    icon: (
      <FaFacebookSquare className="w-6 h-6 text-neutral-100 hover:text-neutral-300 transition ease-in-out" />
    ),
    link: "https://www.facebook.com/",
  },
  {
    icon: (
      <FaXTwitter className="w-6 h-6 text-neutral-100 hover:text-neutral-300 transition ease-in-out" />
    ),
    link: "https://x.com/",
  },
  {
    icon: (
      <FaPinterest className="w-6 h-6 text-neutral-100 hover:text-neutral-300 transition ease-in-out" />
    ),
    link: "https://pl.pinterest.com/",
  },
];
