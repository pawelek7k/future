import { CreateForm } from "@/app/components/create/FormContainer";
import { FirstHeading, SecondHeading } from "@/app/components/global/heading";
import Head from "next/head";

const CreatePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Future - Create your book</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <section className="flex flex-col gap-16 mt-8">
        <div>
          <FirstHeading>Pour your thoughts into the future</FirstHeading>

          <CreateForm />
        </div>
        <div>
          <SecondHeading>Or edit your existing books</SecondHeading>
        </div>
      </section>
    </>
  );
};

export default CreatePage;
