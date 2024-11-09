import NextAuthProvider from "@/app//[locale]/(site)/NextAuthProvider";
import { Loader } from "@/app/components/global/Loader";
import { SiteNavigation } from "@/app/components/navigations/SiteNav";
import { ThemeProvider } from "@/app/components/theme-provider";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Suspense } from "react";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale || "en"} suppressHydrationWarning={true}>
      <body className="bg-primary-bg dark:bg-dark-primary-bg min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextAuthProvider>
              <SiteNavigation />
              <main className="p-4 pt-20 sm:p-10 sm:pt-20 md:p-20">
                <Suspense fallback={<Loader />}>{children}</Suspense>
              </main>
            </NextAuthProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
