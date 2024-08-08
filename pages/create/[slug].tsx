import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const CreateChapters: React.FC = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <section className="flex flex-col gap-16 mt-8 min-h-screen">
        <div className="container mx-auto p-4">
          <div className="rounded-lg p-4 flex flex-col items-center justify-center">
            <textarea
              ref={textareaRef}
              className="w-full min-h-screen p-10 resize-none focus:outline-none bg-transparent"
              value={text}
              placeholder="Once upon a time lived a king who had three daughters..."
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateChapters;
