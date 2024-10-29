import { Socials } from "@/app/components/details/Socials";
import { FirstWord } from "@/app/components/global/FirstWord";
import { getBookDetails } from "@/lib/getDetails";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import Image from "next/legacy/image";
import { redirect } from "next/navigation";
import styles from "./styles.module.css";
import { FirstHeading } from "@/app/components/global/headings/FirstHeading";
import { authOptions } from "@/utils/authOptions";

export const metadata = {
  title: "Future - Read the book",
  description: "Future",
};

interface DetailsDynamicPageProps {
  params: { bookId: string };
}

const DetailsDynamicPage: React.FC<DetailsDynamicPageProps> = async ({
  params,
}) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const { bookId } = params;

  if (!ObjectId.isValid(bookId)) {
    return <section>Invalid book ID</section>;
  }

  const book = await getBookDetails(bookId);

  if (!book) {
    return <section>Book not found</section>;
  }

  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col items-center  shadow-lg rounded-lg">
        <div className="flex md:p-10 p-4 gap-12 flex-col md:flex-row items-center md:items-start">
          <div>
            <div className="relative overflow-hidden rounded-md md:w-48 md:h-80 w-40 h-60">
              <Image
                src={book.cover}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <FirstHeading>{book.title}</FirstHeading>
            <p className="text-sm sm:text-base">{book.description}</p>
            <div className="flex gap-10">
              <p className="text-gray-700 dark:text-neutral-100">
                <FirstWord>For Adult:</FirstWord> {book.forAdult ? "Yes" : "No"}
              </p>
              <p className="text-gray-700 dark:text-neutral-100">
                <FirstWord>Language of the book:</FirstWord>{" "}
                {book.lang ? "PL" : "ENG"}
              </p>
            </div>
            <p className="text-gray-700 dark:text-neutral-100">
              <FirstWord>Genre: </FirstWord>
              {book.genre}
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:gap-20 flex-col md:flex-row">
        <Socials />
        {book.content && (
          <div>
            <div
              className={styles.contentContainer}
              dangerouslySetInnerHTML={{ __html: book.content }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailsDynamicPage;
