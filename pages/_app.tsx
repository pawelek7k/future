import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}
