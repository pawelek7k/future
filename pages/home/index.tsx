import { FirstHeading } from "@/app/components/global/heading";
import { Sidebar } from "@/app/components/home/Sidebar";
import Head from "next/head";

export default function HomeAuthPage() {
  return (
    <>
      <Head>
        <title>Future - Home</title>
        <meta name="description" content="Future" />
      </Head>
      <div>
        <FirstHeading>The most popular books</FirstHeading>
        <Sidebar />
      </div>
    </>
  );
}
