interface TileProps {
  label?: string;
  onClick?: () => void;
  rounded?: "left" | "right";
  children?: React.ReactNode;
}

export const Tile: React.FC<TileProps> = ({
  label,
  onClick,
  rounded,
  children,
}) => {
  const roundedClass =
    rounded === "left"
      ? "rounded-l-lg"
      : rounded === "right"
      ? "rounded-r-lg"
      : "";

  return (
    <li
      onClick={onClick}
      className={`border border-neutral-100 ${roundedClass} flex items-center justify-center dark:border-rose-950 hover:dark:bg-rose-950 hover:bg-neutral-100 transition ease-in-out transform hover:scale-110 uppercase text-xs font-semibold cursor-pointer w-24 h-24 hover:shadow-md`}
    >
      {children || label}
    </li>
  );
};
