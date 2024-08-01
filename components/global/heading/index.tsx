import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FirstHeading = ({ children }: Props) => {
  return <h1>{children}</h1>;
};

export const SecondHeading = ({ children }: Props) => {
  return (
    <h2 className="text-2xl font-semibold mb-6 text-gray-800 font-sans">
      {children}
    </h2>
  );
};

export const ThirdHeading = ({ children }: Props) => {
  return <h3>{children}</h3>;
};
