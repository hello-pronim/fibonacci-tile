import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { css } from "@styled-system/css";
import { initializeApollo } from "@utils/apolloClient";
import { PageQuery } from "@gql/pageGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import OrderingSamples from "@components/pages/support/orderingSamples";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

interface OrderingSamplesPageProps {
  pageData: any;
  notifications: any;
}

const Support: NextPage<OrderingSamplesPageProps> = ({
  pageData,
  notifications,
}) => {
  return (
    <div css={css({ position: "relative" })}>
      <Head>
        <title>Support | Fibonacci</title>
        <meta name="description" content="Support | Fibonacci" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" position="absolute" notifications={notifications} />
      <OrderingSamples pageData={pageData} />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();
  const {
    data: { entry: pageData },
  } = await client.query({
    query: PageQuery,
    variables: {
      slug: "ordering-samples",
    },
  });
  return {
    props: {
      pageData,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Support;
