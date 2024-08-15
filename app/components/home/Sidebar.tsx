import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { DropdownMenu } from "../create/Dropdown";
import { LogoHeading } from "../global/heading";
import { PrimaryButton } from "../global/buttons";

interface FilterValues {
  search: string;
  genre: string;
  forAdult: boolean;
}

interface SidebarProps {
  onFilterChange: (filters: FilterValues) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [isOpen, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [forAdult, setForAdult] = useState(false);

  const handleFilterChange = () => {
    onFilterChange({ search, genre, forAdult });
  };

  const handleGenreChange = (selectedGenre: string) => {
    setGenre(selectedGenre);
  };

  return (
    <div>
      <div className={`fixed z-50 top-2 left-1/2 transform -translate-x-1/2`}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>

      <div
        className={`fixed top-0 right-0 h-full text-sky-950 bg-neutral-100/20 dark:bg-zinc-950/20 p-4 pt-5 z-40 transition-transform duration-300 ease-in-out backdrop-blur-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "400px" }}
      >
        <LogoHeading>Filters</LogoHeading>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <DropdownMenu onChange={handleGenreChange} value={genre} />

        <div className="mb-4">
          <input
            type="checkbox"
            checked={forAdult}
            onChange={() => setForAdult(!forAdult)}
          />
          <label>For Adults</label>
        </div>
        <PrimaryButton onClick={handleFilterChange}>
          Apply Filters
        </PrimaryButton>
      </div>
    </div>
  );
};
