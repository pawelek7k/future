import { CreateForm } from "@/components/create/FormContainer";
import { FirstHeading, SecondHeading } from "@/components/global/heading";
import Head from "next/head";

const CreatePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <FirstHeading>Pour your thoughts into the future</FirstHeading>
      <CreateForm />
      <SecondHeading>Or edit your existing books</SecondHeading>
    </>
  );
};

export default CreatePage;
