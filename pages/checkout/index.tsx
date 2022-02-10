import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { withGlobalData } from "@hoc/withGlobalData";
import { PageQuery } from "@gql/pageGQL";
import Footer from "@components/common/footer";
import CheckoutPage from "@components/pages/checkout";

interface CheckoutPageProps {
  notifications: any;
}

const Checkout: NextPage<CheckoutPageProps> = ({ notifications }) => {
  return (
    <>
      <Head>
        <title>Checkout | Fibonacci</title>
        <meta name="description" content="Fibonacci Checkout page" />
      </Head>
      <CheckoutPage notifications={notifications} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async function () {
  return {
    props: {},
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Checkout;
