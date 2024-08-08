import Head from "next/head";
import { SetStateAction, useState } from "react";

const CreateChapters: React.FC = () => {
  const [text, setText] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <section className="flex flex-col gap-16 mt-8 min-h-screen">
        <div className="container mx-auto p-4">
          <div className=" rounded-lg p-4">
            <textarea
              className="w-full h-96 p-2 border border-gray-300 rounded-md resize-none focus:outline-none"
              value={text}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateChapters;
