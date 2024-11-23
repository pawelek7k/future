import type { Props } from "@/types/children";

export const FirstHeading: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="sm:text-3xl font-sans uppercase font-semibold text-gray-800  dark:text-neutral-50 text-2xl">
      {children}
    </h1>
  );
};
