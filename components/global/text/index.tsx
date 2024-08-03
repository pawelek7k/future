import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Paragraph: React.FC<Props> = ({ children }) => {
  return <p className="text-sky-950">{children}</p>;
};
