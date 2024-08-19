import { RichTextEditor } from "@/app/components/editor";
import Head from "next/head";

interface CreateChaptersProps {
  params: {
    bookId: string;
  };
}

const CreateChapters: React.FC<CreateChaptersProps> = ({ params }) => {
  const { bookId } = params;

  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Create chapters for your book" />
      </Head>
      <RichTextEditor bookId={bookId} />
    </>
  );
};

export default CreateChapters;
