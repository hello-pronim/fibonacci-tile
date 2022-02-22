import { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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

interface ErrorPageProps {
  statusCode: any;
}

const Error: NextPage<ErrorPageProps> = ({ statusCode }) => {
  useEffect(() => {
    // If client error remove localstorage for now
    window.localStorage.removeItem("APP_STATE");
  }, []);
  return (
    <>
      <Head>
        <title>Something went Wrong | Fibonacci</title>
      </Head>
      <Container>
        <Header mode="dark" disableSelectionCart={true} />
        <InnerContainer>
          <PageNotFoundBlock>
            <PageTitle Base="h2" variant="Display-Large">
              {statusCode
                ? `An error ${statusCode} occurred on server`
                : "An error occurred on client"}
            </PageTitle>
            <LinkWrapper>
              <Link href={`/`}>Return home</Link>
              <Arrow type="short" />
            </LinkWrapper>
          </PageNotFoundBlock>
        </InnerContainer>
        <Image layout="responsive" src={img404} alt={"404"} />
      </Container>
      <Footer />
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
