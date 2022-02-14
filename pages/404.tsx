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
interface Custom404Props {
  notifications: Array<any>;
}

const Custom404: NextPage<Custom404Props> = ({ notifications }) => {
  return (
    <>
      <Head>
        <title>Page Not Found | Fibonacci</title>
        <meta name="description" content="Fibonacci About page" />
      </Head>
      <Container>
        <Header mode="dark" notifications={notifications} />
        <InnerContainer>
          <PageNotFoundBlock>
            <PageTitle Base="h2" variant="Display-Large">
              Oops, We can&rsquo;t find the page you were looking for.
            </PageTitle>
            <p>Sorry, it seems the page you&rsquo;re looking dosen&rsquo;t exist. We recommend going to back to the homepage and trying to find it from there.</p>
            <LinkWrapper>
              <Link href={`/`}>
                Return home
              </Link>
              <Arrow type="short" />
            </LinkWrapper>
          </PageNotFoundBlock>
        </InnerContainer>
        <Image
          layout="responsive"
          src={img404}
          alt={"404"}
        />
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
