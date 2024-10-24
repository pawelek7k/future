import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader } from "../components/global/Loader";
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
    <html lang="en">
      <body className="bg-zinc-950">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}
