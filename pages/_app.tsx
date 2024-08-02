import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";
import "../lib/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
