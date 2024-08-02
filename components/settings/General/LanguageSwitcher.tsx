import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => handleChangeLanguage("en")}>English</button>
      <button onClick={() => handleChangeLanguage("pl")}>Polski</button>
    </div>
  );
};

export default LanguageSwitcher;
