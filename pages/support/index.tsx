import Head from "next/head";
import Footer from "@components/common/footer";
import SupportPage from "@components/pages/support";

const Support = () => {
  return (
    <>
      <Head>
        <title>Support | Fibonacci</title>
        <meta name="description" content={`Fibonacci Support page`} />
      </Head>
      <SupportPage />
      <Footer />
    </>
  );
};

export default Support;
