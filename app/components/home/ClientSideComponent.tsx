"use client";

import { BooksGrid } from "@/app/components/home/BooksGrid";
import { BooksList } from "@/app/components/home/BooksList";
import { Sidebar } from "@/app/components/home/Sidebar";
import { useEffect, useState } from "react";
import { CiBoxList, CiGrid41 } from "react-icons/ci";

interface Book {
  _id: string;
  title: string;
  cover: string;
  description: string;
  forAdult: boolean;
  genre: string;
  tags: string[];
}

interface ClientSideComponentProps {
  books: Book[];
  session: any;
}

const ClientSideComponent: React.FC<ClientSideComponentProps> = ({
  books,
  session,
}) => {
  const [filters, setFilters] = useState({
    search: "",
    genre: "",
  });

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const savedViewMode = localStorage.getItem("viewMode");
    if (savedViewMode === "grid" || savedViewMode === "list") {
      setViewMode(savedViewMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const handleFilterChange = (filters: { search: string; genre: string }) => {
    setFilters(filters);
  };

  const handleViewChange = (mode: "grid" | "list") => {
    setViewMode(mode);
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesGenre = !filters.genre || book.genre === filters.genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <div>
        <ul className="flex gap-16 mt-4">
          <li>
            <button
              onClick={() => handleViewChange("grid")}
              className={`flex items-center justify-center gap-2 p-2 ${
                viewMode === "grid" ? "text-sky-950 dark:text-neutral-100" : ""
              }`}
            >
              <CiGrid41 />
              Grid
            </button>
          </li>
          <li>
            <button
              onClick={() => handleViewChange("list")}
              className={`flex items-center justify-center gap-2 p-2 ${
                viewMode === "list" ? "text-sky-950 dark:text-neutral-100" : ""
              }`}
            >
              <CiBoxList />
              List
            </button>
          </li>
        </ul>
      </div>
      <Sidebar onFilterChange={handleFilterChange} />
      {viewMode === "grid" ? (
        <BooksGrid books={filteredBooks} />
      ) : (
        <BooksList books={filteredBooks} />
      )}
    </div>
  );
};

export default ClientSideComponent;
