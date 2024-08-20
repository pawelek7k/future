import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FirstHeading: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="sm:text-3xl font-semibold text-gray-800 font-sans light:text-neutral-50 text-2xl">
      {children}
    </h1>
  );
};

export const SecondHeading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="sm:text-2xl font-semibold text-gray-800 font-sans light:text-neutral-50 text-xl">
      {children}
    </h2>
  );
};

export const ThirdHeading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="sm:text-xl font-semibold text-gray-800 light:text-neutral-50 text-l">
      {children}
    </h3>
  );
};

export const LogoHeading: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="sm:text-l text-lg font-sans tracking-widest light:text-neutral-100">
      {children}
    </h1>
  );
};
