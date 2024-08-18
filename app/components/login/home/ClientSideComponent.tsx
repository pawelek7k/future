"use client";

import { useState } from "react";
import { BooksList } from "@/app/components/login/home/Books";
import { Sidebar } from "@/app/components/login/home/Sidebar";

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

  const handleFilterChange = (filters: { search: string; genre: string }) => {
    setFilters(filters);
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
      <Sidebar onFilterChange={handleFilterChange} />
      <BooksList books={filteredBooks} />
      <div>Welcome, {session.user?.email}</div>
    </div>
  );
};

export default ClientSideComponent;
