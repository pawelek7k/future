import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FirstHeading: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-3xl font-semibold text-gray-800 font-sans dark:text-neutral-50">
      {children}
    </h1>
  );
};

export const SecondHeading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-800 font-sans dark:text-neutral-50">
      {children}
    </h2>
  );
};

export const ThirdHeading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="text-l font-semibold text-gray-800 dark:text-neutral-50">
      {children}
    </h3>
  );
};
