import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { withGlobalData } from "@hoc/withGlobalData";
import Footer from "@components/common/footer";
import Header from "@components/pages/generic/Header";
import {
  Container,
  InnerContainer,
  PageTitle,
} from "@components/pages/generic/styles";

interface Custom404Props {
  notifications: Array<any>;
}

const Custom404: NextPage<Custom404Props> = ({ notifications }) => {
  return (
    <>
      <Head>
        <title>Our story | Fibonacci</title>
        <meta name="description" content="Fibonacci About page" />
      </Head>
      <Container>
        <Header mode="dark" notifications={notifications} />
        <InnerContainer>
          <PageTitle Base="h2" variant="Display-Large">
            Oops, We can’t find the page you were looking for.
          </PageTitle>
          
        </InnerContainer>
      </Container>
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

export default Custom404;
