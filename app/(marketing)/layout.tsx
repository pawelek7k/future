import "@/styles/globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader } from "../components/global/Loader";

export const metadata: Metadata = {
  title: "Future",
  description: "Your favorite writting app!",
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "pl" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body className="bg-zinc-950">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}
