import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../lib/i18n";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
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
