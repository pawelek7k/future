import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export const LangSwitcher = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = () => {
    const nextLocale = locale === "pl" ? "en" : "pl";
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };

  return (
    <button onClick={toggleLocale} disabled={isPending}>
      {locale.toUpperCase()}
    </button>
  );
};
