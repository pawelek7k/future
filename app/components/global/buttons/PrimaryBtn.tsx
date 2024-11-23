import type { ButtonProps } from "@/types/btns";

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  isSubmitting,
  icon,
}) => {
  const ariaLabel = typeof children === "string" ? children : "button";
  return (
    <button
      type="submit"
      className="
          w-full bg-sky-900 text-white py-2 px-4 rounded-lg
          hover:bg-sky-950
          dark:bg-rose-900 dark:hover:bg-rose-800
          shadow-md hover:shadow-lg transition ease-in-out
          flex items-center justify-center gap-2
        "
      onClick={onClick}
      disabled={isSubmitting}
      aria-label={ariaLabel}
    >
      {isSubmitting ? (
        "Submitting..."
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
