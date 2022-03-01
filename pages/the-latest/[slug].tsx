import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { css } from "@styled-system/css";
import { initializeApollo } from "@utils/apolloClient";
import BreadCrumb from "@components/common/breadcrumb";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import SinglePage from "@components/pages/latest/singlePage";
import { withGlobalData } from "@hoc/withGlobalData";
import { NewsQuery, NewsItemQuery } from "@gql/newsGQL";

interface SingleLatestProps {
  pageData: any;
}

const SingleLatest: NextPage<SingleLatestProps> = ({ pageData }) => {
  const crumbs = [
    { path: "/", name: "Home" },
    { path: "/the-latest", name: "The Latest" },
    { path: "", name: pageData.title },
  ];

  return (
    <>
      <Head>
        <title>{pageData.title} | Fibonacci</title>
      </Head>
      <Header mode="dark" />
      <div
        css={css({
          maxWidth: "2560px",
          pl: "32px",
          pt: 92,
          pb: 0,
        })}
      >
        <BreadCrumb crumbs={crumbs} pt={0} />
      </div>
      <SinglePage pageData={pageData} />
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const {
    data: { entries: newsItems },
  } = await client.query({
    query: NewsQuery,
  });
  const paths = newsItems.map((item: any) => ({
    params: {
      slug: item.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = withGlobalData(async function ({
  params,
}) {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: NewsItemQuery,
    variables: { slug: params["slug"] },
  });
  return {
    props: {
      pageData,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default SingleLatest;
