import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="text-neutral-100 font-semibold text-3xl sm:text-5xl text-center md:text-start font-sans">
      {children}
    </h2>
  );
};
