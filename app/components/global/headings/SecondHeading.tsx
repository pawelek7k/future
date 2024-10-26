import { Props } from "@/types/children";

export const SecondHeading: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="sm:text-2xl font-semibold text-gray-800  dark:text-neutral-50 text-xl">
      {children}
    </h2>
  );
};
