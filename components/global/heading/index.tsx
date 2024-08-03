import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FirstHeading = ({ children }: Props) => {
  return (
    <h1 className="text-3xl font-semibold text-gray-800 font-sans dark:text-neutral-50">
      {children}
    </h1>
  );
};

export const SecondHeading = ({ children }: Props) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-800 font-sans dark:text-neutral-50">
      {children}
    </h2>
  );
};

export const ThirdHeading = ({ children }: Props) => {
  return (
    <h3 className="text-l font-semibold text-gray-800 dark:text-neutral-50">
      {children}
    </h3>
  );
};
