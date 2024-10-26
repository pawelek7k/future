import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
import { HiShare } from "react-icons/hi";
import { ThirdHeading } from "../global/headings/ThirdHeading";

interface SocialLink {
  Icon: React.ElementType;
  href: string;
}

export const Socials: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { Icon: FaFacebookSquare, href: "https://www.facebook.com" },
    { Icon: FaXTwitter, href: "https://www.twitter.com" },
    { Icon: FaPinterest, href: "https://www.pinterest.com" },
    { Icon: HiShare, href: "#" },
  ];

  return (
    <div className="flex flex-col items-center gap-4 md:gap-10">
      <ThirdHeading>Share:</ThirdHeading>
      <ul className="flex md:flex-col gap-10 md:items-center mb-10 md:mb-0 justify-center">
        {socialLinks.map(({ Icon, href }, index) => (
          <li key={index}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="w-6 h-6 hover:text-sky-950 hover:dark:text-rose-800 transition ease-in-out" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
