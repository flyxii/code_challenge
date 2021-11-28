import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "component/Header";
import { GlobalStyle } from "shared/globalStyled";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AKQA coding test</title>
        <meta name="description" content="AKQA coding test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
