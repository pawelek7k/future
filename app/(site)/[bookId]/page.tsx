import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getBookDetails } from "@/lib/getDetails";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

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

  const book = await getBookDetails(bookId);
  if (!book) {
    return <section>Book not found</section>;
  }

  return (
    <section>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </section>
  );
};

export default DetailsDynamicPage;
