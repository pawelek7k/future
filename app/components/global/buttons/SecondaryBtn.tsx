import type { ButtonProps } from "@/types/btns";

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
}) => {
  const ariaLabel = typeof children === "string" ? children : "button";
  return (
    <button
      className="p-2 dark:bg-rose-950/30 bg-sky-950/70 text-white py-2 px-4 rounded-lg w-full shadow-md hover:shadow-lg transition ease-in-out hover:bg-sky-950/80 dark:hover:bg-rose-950/80 flex items-center gap-2 justify-center"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
