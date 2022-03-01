import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { withGlobalData } from "@hoc/withGlobalData";
import Footer from "@components/common/footer";
import Header from "@components/pages/generic/Header";
import Arrow from "@components/common/icons/arrow";
import {
  Container,
  InnerContainer,
  PageTitle,
  PageNotFoundBlock,
  LinkWrapper,
} from "@components/pages/generic/styles";
import img404 from "public/assets/temp/404-error-bg.jpeg";

interface ThnkyouPageProps {
  notifications: Array<any>;
}

const Thankyou: NextPage<ThnkyouPageProps> = ({ notifications }) => {
  return (
    <>
      <Head>
        <title>Thank you | Fibonacci</title>
      </Head>
      <Container>
        <Header mode="dark" notifications={notifications} />
        <InnerContainer>
          <PageNotFoundBlock>
            <PageTitle as="h2" variant="Display-Large">
              Thank you for contacting us
            </PageTitle>
            <p>We will get back to you soon.</p>
            <LinkWrapper>
              <Link href={`/`}>Return home</Link>
              <Arrow type="short" />
            </LinkWrapper>
          </PageNotFoundBlock>
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

export default Thankyou;
