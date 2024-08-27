import { useState, useEffect } from "react";
import { PrimaryButton, SecondaryButton } from "../global/Buttons";
import { useSession } from "next-auth/react";
import Notiflix from "notiflix";
import { useRouter } from "next/navigation";

interface ButtonsProps {
  book: {
    _id: string;
    title: string;
    cover: string;
    tags: string[];
    description: string;
    genre: string;
    forAdult: boolean;
  };
}

export const Buttons: React.FC<ButtonsProps> = ({ book }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleAddToLibrary = async () => {
    if (!session?.user) {
      Notiflix.Notify.warning(
        "You need to be logged in to add a book to your library."
      );
      return;
    }

    try {
      const response = await fetch("/api/user/library/add", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId: book._id }),
      });

      if (response.ok) {
        Notiflix.Notify.success("Book added to library!");
      } else if (response.status === 409) {
        Notiflix.Notify.warning("This book is already in your library.");
      } else {
        Notiflix.Notify.failure("Failed to add book to library.");
      }
    } catch (error) {
      Notiflix.Notify.failure("Error adding book to library.");
    }
  };

  const handleStartReading = () => {
    try {
      setIsSubmitting(true);
      router.push(`/${book._id}`);
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ul className="flex justify-between mt-2 flex-col gap-4 sm:flex-row">
      <li>
        <PrimaryButton onClick={handleStartReading} isSubmitting={isSubmitting}>
          Start reading
        </PrimaryButton>
      </li>
      <li>
        <SecondaryButton onClick={handleAddToLibrary}>
          Add to library
        </SecondaryButton>
      </li>
    </ul>
  );
};
