import type { Props } from "@/types/children";

export const LogoHeading: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="sm:text-l text-lg font-sans tracking-widest dark:text-neutral-100">
      {children}
    </h1>
  );
};
