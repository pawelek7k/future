import { bookGenres } from "@/lib/routes";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative z-20">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
      >
        Genre
        <HiChevronDown
          className={`ml-2 transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-64 shadow-lg rounded-lg transition-opacity duration-300 ease-in-out">
          {bookGenres.map(({ id, name }) => (
            <li key={id} className="hover:bg-blue-100">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
