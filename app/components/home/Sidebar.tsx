import { DropdownMenu } from "@/app/components/global/Dropdown";
import { SearchInput } from "@/app/components/global/SearchInput";
import { Divide as Hamburger } from "hamburger-react";
import React, { KeyboardEvent, useState } from "react";
import { SecondHeading } from "../global/Heading";
import { LangSwitch } from "../global/LangSwitch";
import { ToggleSwitch } from "../global/ToggleSwitch";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { SecondaryButton } from "../global/buttons/SecondaryBtn";

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
  const [lang, setLang] = useState<"pl" | "eng">("pl");

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

  const handleLangChange = (selectedLang: "pl" | "eng") => {
    setLang(selectedLang);
  };

  return (
    <div>
      <div className="fixed z-50 top-2 right-5 transform -translate-x-1/2">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          aria-controls="sidebar"
        />
      </div>
      <div
        id="sidebar"
        className={`fixed top-20 right-0 md:right-10 text-sky-950 bg-neutral-100/40 dark:bg-zinc-950/20 p-6 z-40 rounded-xl transition-transform duration-300 ease-in-out backdrop-blur-lg flex flex-col gap-4 shadow-md dark:shadow-zinc-950 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full md:w-[400px]`}
      >
        <SecondHeading>Filters</SecondHeading>
        <SearchInput
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={search}
          aria-label="Search"
        />
        <DropdownMenu onChange={handleGenreChange} value={genre} />
        <div className="flex items-center gap-2">
          <span className="dark:text-neutral-100 text-sm font-medium text-gray-700">
            For adult
          </span>
          <ToggleSwitch
            name="forAdult"
            value={forAdult ? "on" : "off"}
            onChange={handleToggleChange}
          />
        </div>
        <div className="flex gap-2 items-center mb-4">
          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Language of the book:
          </span>
          <div className="flex items-center gap-2 ">
            <span className="text-sm dark:text-neutral-100">PL</span>
            <LangSwitch name="Lang" onChange={handleLangChange} value={lang} />
            <span className="text-sm dark:text-neutral-100">ENG</span>
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
