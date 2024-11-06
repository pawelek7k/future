import NextAuthProvider from "@/app//[locale]/(site)/NextAuthProvider";
import { Loader } from "@/app/components/global/Loader";
import { SiteNavigation } from "@/app/components/navigations/SiteNav";
import { ThemeProvider } from "@/app/components/theme-provider";
import "@/styles/globals.css";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-primary-bg dark:bg-dark-primary-bg min-h-screen">
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
      </body>
    </html>
  );
}
