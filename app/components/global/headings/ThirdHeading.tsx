import { Props } from "@/types/children";

export const ThirdHeading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="sm:text-xl font-semibold text-gray-800 dark:text-neutral-50 text-l">
      {children}
    </h3>
  );
};
