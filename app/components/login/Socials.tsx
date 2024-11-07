import { socials } from "@/lib/arrays/socials";

export const Socials: React.FC = () => {
  return (
    <ul className="flex gap-10 md:items-center md:mt-10 mb-10 md:mb-0 justify-center mt-4">
      {socials.map((social) => (
        <li
          className="rounded-full hover:border-sky-950 ease-in-out cursor-pointer p-3 border border-rose-950"
          key={social.link}
        >
          <a href={social.link} target="_blank">
            <span>{social.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
