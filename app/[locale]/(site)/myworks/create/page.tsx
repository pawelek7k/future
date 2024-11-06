import { CreateForm } from "@/app/components/create/FormContainer";
import { FirstHeading } from "@/app/components/global/headings/FirstHeading";

export const metadata = {
  title: "Future - Create your book",
  description: "Future",
};

export default async function CreateAuthPage() {
  return (
    <section>
      <FirstHeading>Create your book!</FirstHeading>
      <CreateForm />
    </section>
  );
}
