import { ArrayGenres } from "@/lib/arrays/bookGenre";
import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  name?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const DropdownMenu: React.FC<Props> = ({ name, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(value);
  const bookGenres = ArrayGenres;

  const handleSelectGenre = (genreName: string) => {
    setSelectedGenre(genreName);
    setIsDropdownOpen(false);
    onChange(genreName);
  };

  useEffect(() => {
    setSelectedGenre(value);
  }, [value]);

  return (
    <div className="relative z-20">
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center text-gray-700 dark:text-neutral-100 text-sm font-medium mb-2"
      >
        {selectedGenre || "genre"}
        <HiChevronDown
          className={`ml-2 transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-64 shadow-lg backdrop-blur-lg bg-neutral-100/40 p-1 rounded-lg transition-opacity duration-300 ease-in-out">
          {bookGenres.map(({ id, name }) => (
            <li
              key={id}
              className="hover:bg-sky-950/10 rounded-md cursor-pointer dark:hover:bg-rose-950/10"
              onClick={() => handleSelectGenre(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" id={name} name={name} value={selectedGenre} />
    </div>
  );
};
