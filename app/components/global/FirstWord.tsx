import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FirstWord: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-sky-950 tracking-wide font-semibold dark:text-neutral-100 font-sans">
      {children}
    </span>
  );
};
