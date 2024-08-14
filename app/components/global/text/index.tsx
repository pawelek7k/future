import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Paragraph: React.FC<Props> = ({ children }) => {
  return <p className="text-sky-950">{children}</p>;
};

export const FirstWord: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-sky-950 tracking-wide font-semibold dark:text-neutral-100">
      {children}
    </span>
  );
};
