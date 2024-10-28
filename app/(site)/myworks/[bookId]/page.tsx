import { RichTextEditor } from "@/app/components/editor";

interface CreateChaptersProps {
  params: {
    bookId: string;
  };
}

export const metadata = {
  title: "Future - Book Content",
  description: "Write Your Best Thoughts",
};

const CreateChapters: React.FC<CreateChaptersProps> = ({ params }) => {
  const { bookId } = params;

  return (
    <>
      <RichTextEditor bookId={bookId} />
    </>
  );
};

export default CreateChapters;
