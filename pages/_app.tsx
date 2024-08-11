import ContentLayout from "@/app/components/layout/ContentLayout";
import DefaultLayout from "@/app/components/layout/DefaultLayout";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import "../lib/i18n";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout = router.pathname.startsWith("/auth")
    ? ContentLayout
    : DefaultLayout;
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
