import { Divide as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import { KeyboardEvent, useEffect, useState } from "react";
import { DropdownMenu } from "../create/Dropdown";
import { ToggleSwitch } from "../create/ToggleSwitch";
import { PrimaryButton, SecondaryButton } from "../global/buttons";
import { LogoHeading } from "../global/heading";
import { SearchInput } from "../global/SearchInput";

interface FilterValues {
  search: string;
  genre: string;
  forAdult: boolean;
}

interface SidebarProps {
  onFilterChange: (filters: FilterValues) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [forAdult, setForAdult] = useState(false);

  useEffect(() => {
    const {
      search: querySearch,
      genre: queryGenre,
      forAdult: queryForAdult,
    } = router.query;
    setSearch((querySearch as string) || "");
    setGenre((queryGenre as string) || "");
    setForAdult(queryForAdult === "true");
  }, [router.query]);

  const handleFilterChange = () => {
    const query: any = {};
    if (search) query.search = search;
    if (genre) query.genre = genre;
    if (forAdult) query.forAdult = forAdult;

    router.push({
      pathname: router.pathname,
      query: query,
    });
    onFilterChange({ search, genre, forAdult });
  };

  const handleClearFilters = () => {
    setSearch("");
    setGenre("");
    setForAdult(false);

    router.push({
      pathname: router.pathname,
      query: {},
    });

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
      <div className={`fixed z-50 top-2 left-1/2 transform -translate-x-1/2`}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      <div
        className={`fixed top-0 right-0 h-full text-sky-950 bg-neutral-100/20 dark:bg-zinc-950/20 p-4 pt-5 z-40 transition-transform duration-300 ease-in-out backdrop-blur-lg flex flex-col gap-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "400px" }}
      >
        <LogoHeading>Filters</LogoHeading>
        <SearchInput
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={search}
        />
        <DropdownMenu onChange={handleGenreChange} value={genre} />

        <div className="flex items-center gap-2">
          <ToggleSwitch
            name="forAdult"
            value={forAdult ? "on" : "off"}
            onChange={handleToggleChange}
          />
          <label>For Adults</label>
        </div>
        <PrimaryButton onClick={handleFilterChange}>
          Apply Filters
        </PrimaryButton>
        <SecondaryButton onClick={handleClearFilters}>
          Clear Filters
        </SecondaryButton>
      </div>
    </div>
  );
};
