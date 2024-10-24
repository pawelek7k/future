import NextAuthProvider from "@/app/(site)/NextAuthProvider";
import { Suspense } from "react";
import { Loader } from "../components/global/Loader";
import { SiteNavigation } from "../components/navigations/SiteNav";
import { ThemeProvider } from "../components/theme-provider";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <NextAuthProvider>
        <body className="bg-primary-bg dark:bg-dark-primary-bg min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteNavigation />
            <main className="p-4 pt-20 sm:p-10 sm:pt-20 md:p-20">
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </main>
          </ThemeProvider>
        </body>
      </NextAuthProvider>
    </html>
  );
}
