import Head from "next/head";
import SupportPage from "@components/pages/support";
import Header from "@components/common/header";
import Footer from "@components/common/footer";
import { css } from "@styled-system/css";

const Support = () => {
  return (
    <div css={css({position: 'relative'})}>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Support | Fibonacci" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" position="absolute" />
      <SupportPage/>
      <Footer />
    </div>
  );
};

export default Support;
