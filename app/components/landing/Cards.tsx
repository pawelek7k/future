export const Cards: React.FC = () => {
  return (
    <div className="flex justify-end border-l border-sky-950">
      <ul className="flex flex-col gap-10 pl-10">
        <li>
          <div className="text-neutral-100 card shadow-lg shadow-rose-700 flex flex-col">
            <div className="z-30 flex items-start text-2xl font-sans">
              <span className="text-2xl font-semibold">+</span>
              <span className="text-5xl">5k</span>
            </div>
            <div className="z-30 text-neutral-300">
              <p>
                writers<span className="font-semibold"> &</span>
              </p>
              <p>readers</p>
            </div>
          </div>
        </li>
        <li>
          <div className="text-neutral-100 card shadow-lg shadow-rose-700 flex flex-col">
            <div className="z-30 flex items-start text-2xl font-sans">
              <span className="text-2xl font-semibold">+</span>
              <span className="text-5xl">5k</span>
            </div>
            <div className="z-30 text-neutral-300">
              <p>
                writers<span className="font-semibold"> &</span>
              </p>
              <p>readers</p>
            </div>
          </div>
        </li>
        <li>
          <div className="text-neutral-100 card shadow-lg shadow-rose-700 flex flex-col">
            <div className="z-30 flex items-start text-2xl font-sans">
              <span className="text-2xl font-semibold">+</span>
              <span className="text-5xl">5k</span>
            </div>
            <div className="z-30 text-neutral-300">
              <p>
                writers<span className="font-semibold"> &</span>
              </p>
              <p>readers</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
