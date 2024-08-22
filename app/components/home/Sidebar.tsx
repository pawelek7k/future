"use client";

import { DropdownMenu } from "@/app/components/global/Dropdown";
import { SearchInput } from "@/app/components/global/SearchInput";
import { Divide as Hamburger } from "hamburger-react";
import { KeyboardEvent, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../global/Buttons";
import { FirstHeading } from "../global/Heading";
import { ToggleSwitch } from "../global/ToggleSwitch";

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

  const handleClearFilters = () => {
    setSearch("");
    setGenre("");
    setForAdult(false);

    onFilterChange({ search: "", genre: "", forAdult: false });
  };

  const handleGenreChange = (selectedGenre: string) => {
    setGenre(selectedGenre);
  };

  const handleToggleChange = (value: string) => {
    setForAdult(value === "on");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilterChange();
    }
  };

  return (
    <div>
      <div className="fixed z-50 top-2 right-5 transform -translate-x-1/2">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          aria-expanded={isOpen}
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full text-sky-950 bg-neutral-100/40 dark:bg-zinc-950/20 p-6 pt-20 z-40 transition-transform duration-300 ease-in-out backdrop-blur-lg flex flex-col gap-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "400px" }}
      >
        <FirstHeading>Filters</FirstHeading>
        <SearchInput
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={search}
        />
        <DropdownMenu onChange={handleGenreChange} value={genre} />
        <div className="flex items-center gap-2">
          <label className="dark:text-neutral-100 text-sm">For adult</label>
          <ToggleSwitch
            name="forAdult"
            value={forAdult ? "on" : "off"}
            onChange={handleToggleChange}
          />
          <div className="flex gap-2 items-center mb-4">
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Language of the book:
            </span>
            <div className="flex items-center gap-2 ">
              <span className="text-sm">PL</span>
              <ToggleSwitch
                name="Lang"
                value={forAdult ? "on" : "off"}
                onChange={handleToggleChange}
              />
              <span className="text-sm">ENG</span>
            </div>
          </div>
        </div>
        <PrimaryButton onClick={handleFilterChange}>
          Apply Filters
        </PrimaryButton>
        <SecondaryButton onClick={handleClearFilters}>
          Clear filters
        </SecondaryButton>
      </div>
    </div>
  );
};
