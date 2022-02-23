import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { css } from "@styled-system/css";
import { initializeApollo } from "@utils/apolloClient";
import { PageQuery } from "@gql/pageGQL";
import { ProductsQuery } from "@gql/productGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import RequestQuote from "@components/pages/support/requestQuote";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

interface SupportPageProps {
  pageData: any;
  products: any;
  notifications: any;
}

const QuoteRequest: NextPage<SupportPageProps> = ({
  pageData,
  products,
  notifications,
}) => {
  return (
    <div css={css({ position: "relative" })}>
      <Head>
        <title>Support | Fibonacci</title>
        <meta name="description" content="Support | Fibonacci" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" notifications={notifications} />
      <RequestQuote pageData={pageData} products={products} />
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
      slug: "request-quote",
    },
  });
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
  });

  return {
    props: {
      pageData,
      products,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default QuoteRequest;
