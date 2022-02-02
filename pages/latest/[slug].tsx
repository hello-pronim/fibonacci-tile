import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Arrow from "@components/common/icons/arrow";
import SinglePage from "@components/pages/latest/singlePage";
import { BottomBarInner, LinkWrapper } from "@components/pages/latest/styles";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function LatestSlug() {
  return (
    <>
      <Head>
        <title>Projects | Fibonacci</title>
        <meta name="description" content="Fibonacci Projects page" />
      </Head>
      <Header mode="dark" />
      <BottomBarInner>
        <LinkWrapper>
          <Arrow type="short" direction="left" />
          <Link href="#">Back</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/">Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">Page 1</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">Page 2</Link>
        </LinkWrapper>
      </BottomBarInner>
      <SinglePage />
      <Footer />
    </>
  );
}
