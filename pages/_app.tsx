import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "component/Header";
import { GlobalStyle } from "shared/globalStyled";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>coding test</title>
        <meta name="description" content="coding test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
