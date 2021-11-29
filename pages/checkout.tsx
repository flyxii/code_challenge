import type { NextPage } from "next";
import Head from "next/head";
import { AppProvider } from "component/Pages/Checkout/store/context";
import Checkout from "component/Pages/Checkout";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>coding test checkout</title>
        <meta name="description" content="coding test checkout page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <Checkout />
      </AppProvider>
    </>
  );
};

export default Page;
