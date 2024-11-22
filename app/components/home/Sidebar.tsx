import { DropdownMenu } from "@/app/components/global/Dropdown";
import { SearchInput } from "@/app/components/global/SearchInput";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { LangSwitch } from "../global/LangSwitch";
import { ToggleSwitch } from "../global/ToggleSwitch";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { SecondaryButton } from "../global/buttons/SecondaryBtn";
import { SecondHeading } from "../global/headings/SecondHeading";

interface Filters {
  search: string;
  genre: string;
  forAdult: boolean;
  lang: "pl" | "eng";
}

interface SidebarProps {
  onFilterChange: (filters: Filters) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [isOpen, setOpen] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    genre: "",
    forAdult: false,
    lang: "pl",
  });

  const handleInputChange = (key: keyof Filters, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleFilterChange = () => onFilterChange(filters);

  const handleClearFilters = () => {
    setFilters({ search: "", genre: "", forAdult: false, lang: "pl" });
    onFilterChange({ search: "", genre: "", forAdult: false, lang: "pl" });
  };

  return (
    <div>
      <button
        className="fixed z-50 top-2 right-5"
        onClick={() => setOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </button>
      <div
        id="sidebar"
        className={`fixed top-20 right-0 md:right-10 bg-neutral-100/40 dark:bg-zinc-950/20 p-6 z-40 rounded-xl transition-transform duration-300 ease-in-out backdrop-blur-lg flex flex-col gap-4 shadow-md dark:shadow-zinc-950 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full md:w-[400px]`}
      >
        <SecondHeading>Filters</SecondHeading>
        <SearchInput
          onChange={(e) => handleInputChange("search", e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleFilterChange()}
          value={filters.search}
          aria-label="Search"
        />
        <DropdownMenu
          onChange={(genre) => handleInputChange("genre", genre)}
          value={filters.genre}
        />
        <div className="flex items-center gap-2">
          <span className="dark:text-neutral-100 text-sm font-medium text-gray-700">
            For adult
          </span>
          <ToggleSwitch
            name="forAdult"
            value={filters.forAdult ? "on" : "off"}
            onChange={(value) => handleInputChange("forAdult", value === "on")}
          />
        </div>
        <div className="flex gap-2 items-center mb-4">
          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Language of the book:
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm dark:text-neutral-100">PL</span>
            <LangSwitch
              name="Lang"
              onChange={(lang) => handleInputChange("lang", lang)}
              value={filters.lang}
            />
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

export default Sidebar;
