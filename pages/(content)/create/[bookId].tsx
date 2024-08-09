import { RichTextEditor } from "@/app/components/champterEditor/Textarea";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CreateChapters: React.FC = () => {
  const router = useRouter();
  const { bookId } = router.query;
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      console.log("Router query:", router.query);
      if (typeof bookId === "string") {
        setId(bookId);
      }
    }
  }, [router.isReady, bookId, router.query]);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <RichTextEditor bookId={id} />
    </>
  );
};

export default CreateChapters;
