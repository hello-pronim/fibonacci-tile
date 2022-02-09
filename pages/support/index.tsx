import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { initializeApollo } from "@utils/apolloClient";
import { PageQuery } from "@gql/pageGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import SupportPage from "@components/pages/support";
import Header from "@components/common/header";
import Footer from "@components/common/footer";
import { css } from "@styled-system/css";

interface SupportPageProps {
  pageData: any;
  notifications: any;
}

const Support: NextPage<SupportPageProps> = ({ pageData, notifications }) => {
  return (
    <div css={css({ position: "relative" })}>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Support | Fibonacci" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" position="absolute" notifications={notifications} />
      <SupportPage pageData={pageData} />
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
      slug: "support",
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
