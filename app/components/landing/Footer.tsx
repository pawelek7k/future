import { LightLogo } from "../global/Logo";

export const Footer = () => {
  return (
    <footer className="h-screen p-20 border-t border-sky-950">
      <div className="flex justify-start items-center gap-2">
        <LightLogo />
        <span className="text-neutral-300 font-semibold">
          {" "}
          - Create your way with future
        </span>
      </div>
    </footer>
  );
};
