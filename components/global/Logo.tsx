import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-black rounded-full shadow-lg shadow-sky-950/50">
        <div className="w-7 h-7 bg-neutral-100 rounded-full"></div>
      </div>
      <h1 className="text-lg font-sans tracking-widest">Future</h1>
    </div>
  </Link>
);
