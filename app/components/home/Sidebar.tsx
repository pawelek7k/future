"use client";

import { DropdownMenu } from "@/app/components/global/Dropdown";
import { SearchInput } from "@/app/components/global/SearchInput";
import { Divide as Hamburger } from "hamburger-react";
import { KeyboardEvent, useState } from "react";

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
    const query: any = {};
    if (search) query.search = search;
    if (genre) query.genre = genre;
    if (forAdult) query.forAdult = forAdult;

    onFilterChange({ search, genre, forAdult });
  };

  // Clear filters and reset state
  const handleClearFilters = () => {
    setSearch("");
    setGenre("");
    setForAdult(false);

    onFilterChange({ search: "", genre: "", forAdult: false });
  };

  // Update genre filter
  const handleGenreChange = (selectedGenre: string) => {
    setGenre(selectedGenre);
  };

  // Toggle adult filter
  const handleToggleChange = () => {
    setForAdult((prev) => !prev);
  };

  // Update search filter
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Apply filters on Enter key press
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilterChange();
    }
  };

  return (
    <div>
      <div className="fixed z-50 top-2 left-1/2 transform -translate-x-1/2">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          aria-expanded={isOpen}
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full text-sky-950 bg-neutral-100/40 dark:bg-zinc-950/20 p-4 pt-5 z-40 transition-transform duration-300 ease-in-out backdrop-blur-lg flex flex-col gap-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "400px" }}
      >
        <h1>Filters</h1>
        <SearchInput
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={search}
        />
        <DropdownMenu onChange={handleGenreChange} value={genre} />
        <div className="flex items-center gap-2">
          <label>For adult</label>
          <input
            type="checkbox"
            checked={forAdult}
            onChange={handleToggleChange}
          />
        </div>
        <button onClick={handleFilterChange}>Apply Filters</button>
        <button onClick={handleClearFilters}>Clear filters</button>
      </div>
    </div>
  );
};
