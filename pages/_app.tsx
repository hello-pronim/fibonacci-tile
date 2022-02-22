import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import { Global, ThemeProvider } from "@emotion/react";
import { ApolloProvider } from "@apollo/client";
import { AppWrapper } from "@contexts/AppContext";
import { useApollo } from "@utils/apolloClient";
import global from "styles/global";
import theme from "styles/theme";
import "nprogress/nprogress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/typefaces.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AppWrapper>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex" />
          </Head>
          <ThemeProvider theme={theme}>
            <Global styles={global} />
            <Component {...pageProps} />
          </ThemeProvider>
        </AppWrapper>
      </ApolloProvider>
    </>
  );
}

export default App;
