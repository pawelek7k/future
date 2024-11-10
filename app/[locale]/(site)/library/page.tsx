import { FirstHeading } from "@/app/components/global/headings/FirstHeading";
import { Loader } from "@/app/components/global/Loader";
import ClientSideComponent from "@/app/components/home/ClientSideComponent";
import { getUserLibrary } from "@/lib/getUserLibrary";
import { redirect } from "@/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Future - Your Library",
  description: "Future",
};

const LibraryAuthPage: React.FC = async () => {
  const { books, userLibrary } = await getUserLibrary();

  if (books.length === 0) {
    redirect("/");
    return null;
  }

  return (
    <section>
      <FirstHeading>Your Library!</FirstHeading>
      <Suspense fallback={<Loader />}>
        <ClientSideComponent books={books} userLibrary={userLibrary} />
      </Suspense>
    </section>
  );
};

export default LibraryAuthPage;
