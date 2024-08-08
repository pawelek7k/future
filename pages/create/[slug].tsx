import { ChampterEditor } from "@/app/components/champterEditor";
import Head from "next/head";

const CreateChapters: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <ChampterEditor />
    </>
  );
};

export default CreateChapters;
