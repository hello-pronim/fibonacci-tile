import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { initializeApollo } from "@utils/apolloClient";
import { PageQuery } from "@gql/pageGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import Footer from "@components/common/footer";
import GenericPage from "@components/pages/generic";

interface PrivacyPageProps {
  pageData: any;
  notifications: Array<any>;
}

const Privacy: NextPage<PrivacyPageProps> = ({ pageData, notifications }) => {
  console.log(pageData);
  return (
    <>
      <Head>
        <title>Privacy Policy | Fibonacci</title>
      </Head>
      <GenericPage pageData={pageData} notifications={notifications} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async () => {
  const client = initializeApollo();
  const {
    data: { entry: pageData },
  } = await client.query({
    query: PageQuery,
    variables: {
      slug: "privacy-policy",
    },
  });
  console.log(pageData);
  return {
    props: {
      pageData,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Privacy;
