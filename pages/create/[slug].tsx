import { FirstHeading } from "@/app/components/global/heading";
import Head from "next/head";

const CreateChapters: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <section className="flex flex-col gap-16 mt-8 min-h-screen">
        <div>
          <FirstHeading>ok</FirstHeading>
        </div>
      </section>
    </>
  );
};

export default CreateChapters;
