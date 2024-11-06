// "use client";

// import { useRouter, usePathname } from "@/navigation";
// import { useParams } from "next/navigation";
// import { ChangeEvent, useTransition } from "react";

// export const LangSwitcher = () => {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const pathname = usePathname();
//   const params = useParams();

//   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
//     const nextLocale = event.target.value as Locale;
//     startTransition(() => {
//       router.replace(
//         // @ts-expect-error -- TypeScript will validate that only known `params`
//         // are used in combination with a given `pathname`. Since the two will
//         // always match for the current route, we can skip runtime checks.
//         { pathname, params },
//         { locale: nextLocale }
//       );
//     });
//   }

//   return (
//     <button
//       onClick={() => onChangeLanguage(params.lang === "en" ? "pl" : "en")}
//       className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600"
//     >
//       {params.lang === "en" ? "English" : "Polski"}{" "}
//       {/* Wyświetlanie obecnego języka */}
//     </button>
//   );
// };
