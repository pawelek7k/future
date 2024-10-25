import { ButtonProps } from "@/types/btns";

export const AbsoluteButton: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  const ariaLabel = typeof children === "string" ? children : "button";
  return (
    <button
      className="mt-4 p-2 absolute -top-10 right-0  bg-sky-900 text-white py-2 px-4 rounded-lg
    hover:bg-sky-950
    dark:bg-rose-900 dark:hover:bg-rose-800
    shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
