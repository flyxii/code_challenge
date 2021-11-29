import type { NextPage } from "next";
import Head from "next/head";
import Index from "component/Pages/Index";
import Footer from "component/Footer";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>coding test home page</title>
        <meta name="description" content="coding test index page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Index />
      <Footer />
    </>
  );
};

export default Page;
