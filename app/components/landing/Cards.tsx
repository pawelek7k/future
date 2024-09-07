import { statistics } from "@/lib/arrays/statistics";

export const Cards: React.FC = () => {
  return (
    <div className=" justify-end border-l border-sky-950 hidden md:flex">
      <ul className="flex flex-col gap-10 pl-10">
        {statistics.map((statistic) => (
          <li key={statistic.id}>
            <div className="text-neutral-100 card shadow-lg shadow-rose-700 flex flex-col">
              <div className="z-30 flex items-start text-2xl font-sans">
                <span className="text-2xl font-semibold">+</span>
                <span className="text-5xl">{statistic.numbers}</span>
              </div>
              <div className="z-30 text-neutral-300">
                {statistic.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
