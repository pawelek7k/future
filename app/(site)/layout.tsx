import NextAuthProvider from "@/app/(site)/NextAuthProvider";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader } from "../components/global/Loader";
import { SiteNavigation } from "../components/navigations/SiteNav";
import { ThemeProvider } from "../components/theme-provider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Future",
  description: "Your favorite writting app!",
};

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
            <main className="p-10 pt-20 md:p-20">
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </main>
          </ThemeProvider>
        </body>
      </NextAuthProvider>
    </html>
  );
}
