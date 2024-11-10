import { CreateForm } from "@/app/components/create/FormContainer";
import { FirstHeading } from "@/app/components/global/headings/FirstHeading";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Future - Create your book",
  description: "Future",
};

const CreateAuthPage = () => {
  const t = useTranslations("headings");
  return (
    <section>
      <FirstHeading>{t("create")}</FirstHeading>
      <CreateForm />
    </section>
  );
};

export default CreateAuthPage;
