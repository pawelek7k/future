import { useRouter } from "@/navigation";
import { Book } from "@/types/book";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Notiflix from "notiflix";
import { useState } from "react";
import { PrimaryButton } from "../global/buttons/PrimaryBtn";
import { SecondaryButton } from "../global/buttons/SecondaryBtn";
import { Loader } from "../global/Loader";

interface ButtonsProps {
  book: Book;
}

export const Buttons: React.FC<ButtonsProps> = ({ book }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { data: session } = useSession();
  const router = useRouter();
  const t = useTranslations("global");

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
    <>
      {isSubmitting && <Loader />}
      <ul className="flex justify-between mt-2 flex-col gap-4 sm:flex-row">
        <li>
          <PrimaryButton
            onClick={handleStartReading}
            isSubmitting={isSubmitting}
          >
            {t("startReading")}
          </PrimaryButton>
        </li>
        <li>
          <SecondaryButton onClick={handleAddToLibrary}>
            {t("addToLibrary")}
          </SecondaryButton>
        </li>
      </ul>
    </>
  );
};
