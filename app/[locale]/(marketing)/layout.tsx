import { Loader } from "@/app/components/global/Loader";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Suspense } from "react";
import { Inter } from "@next/font/google";

export const metadata: Metadata = {
  title: "Future",
  description: "Your favorite writing app!",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale || "en"}>
      <body className={`bg-zinc-950 ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
