import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <meta
            name="description"
            content="Alex Karidas is a software engineer and designer based in Greece."
          />
          <meta
            name="keywords"
            content="Alex Karidas, Software Engineer, Designer, Greece"
          />
          <meta name="developer" content="Alex Karidas" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
