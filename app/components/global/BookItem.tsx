import type { Book } from "@/types/book";
import { useTranslations } from "next-intl";
import React, { memo, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { Cover } from "../global/Cover";
import { FirstWord } from "../global/FirstWord";
import { ThirdHeading } from "../global/headings/ThirdHeading";

interface BookItemProps {
  book: Book;
  isInLibrary: boolean;
  onBookClick: (book: Book) => void;
  onRemove: (bookId: string) => Promise<void>;
}

export const BookItem: React.FC<BookItemProps> = memo(
  ({ book, isInLibrary, onBookClick, onRemove }) => {
    const [hovered, setHovered] = useState(false);
    const t = useTranslations("global");

    return (
      <li
        key={book._id}
        className="cursor-pointer dark:shadow-sm flex gap-2 hover:bg-neutral-100/20 p-2 transition ease-in-out rounded-lg dark:hover:bg-zinc-950/30 hover:shadow-sm flex-col sm:flex-row"
      >
        <div
          onClick={() => onBookClick(book)}
          className="flex flex-col sm:flex-row gap-2"
        >
          <Cover title={book.title} cover={book.cover} />
          <div className="p-2 flex flex-col gap-2">
            <ThirdHeading>{book.title}</ThirdHeading>
            <p className="text-sm md:text-base">
              <FirstWord>{t("adultChecker")}:</FirstWord>{" "}
              {book.forAdult ? t("yes") : t("no")}
            </p>
            <p className="text-sm md:text-base">{book.description}</p>
          </div>
        </div>
        {isInLibrary && (
          <div
            className="flex items-center justify-center p-4 md:p-12 relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <button
              onClick={() => onRemove(book._id)}
              className="flex items-center justify-center"
              aria-label="Remove book from library"
            >
              <IoTrashBin className="text-red-500 transition ease-in-out hover:text-rose-950 w-6 h-6" />
            </button>
            {hovered && (
              <div className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-neutral-300 text-sky-950 dark:bg-zinc-950 rounded-md dark:text-neutral-100">
                Remove from library
              </div>
            )}
          </div>
        )}
      </li>
    );
  }
);

BookItem.displayName = "BookItem";
