import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { withGlobalData } from "@hoc/withGlobalData";
import Footer from "@components/common/footer";
import GenericPage from "@components/pages/generic";

interface PrivacyPageProps {
  pageData: any;
  notifications: Array<any>;
}

const Privacy: NextPage<PrivacyPageProps> = ({ pageData, notifications }) => {
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
  return {
    props: {},
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Privacy;
