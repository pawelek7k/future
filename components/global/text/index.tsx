import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Paragraph = ({ children }: Props) => {
  return <p className="text-sky-950">{children}</p>;
};
