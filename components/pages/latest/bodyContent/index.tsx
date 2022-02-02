import React, { useEffect, useState } from "react";
import Text from "@components/common/typography";
import {
  FwWrapper,
  LeftCol,
  TextCol,
  Wrapper,
  SahreLinkWrapper,
  Row,
} from "./styles";
import Image from "next/image";

import ContPic1 from "public/assets/latest-news/single-page/single-page1.png";
import ContPic3 from "public/assets/latest-news/single-page/single-page3.png";
import css from "@styled-system/css";
import Link from "next/link";
import Arrow from "@components/common/icons/arrow";
import { LinkWrapper } from "../styles";
import TextSection from "./TextSection";
import FollowSection from "./FollowSection";
import TwoImageSection from "./TwoImageSection";

const BodyContent = () => {
  const useWidth = () => {
    if (process.browser) {
      const [width, setWidth] = useState(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [width]);
      return width;
    }
    return 0;
  };
  const windowWidth = useWidth();

  return (
    <div style={{ paddingTop: "55px" }}>
      <FwWrapper>
        <Image
          alt=""
          src={ContPic1}
          layout="responsive"
          width="1920"
          height="1080"
        ></Image>
      </FwWrapper>
      <FollowSection />
      <TwoImageSection />
      <TextSection />
      <Wrapper>
        <TextCol>
          <Text as="h1" variant="Display-Medium" altFont>
            Venenatis sagittis, risus purus vulputate bibendum augue nisi, eget
            venenatis. Amet, cursus eu, pellentesque vel ut dignissim nunc nunc
            nunc.
          </Text>
        </TextCol>
        <Image
          alt=""
          src={ContPic3}
          layout="responsive"
          width="1460"
          height="820"
        ></Image>
        <Text variant="Body-XSmall" css={css({ mt: 16, mr: 40 })}>
          Photography by Lucia Braham
        </Text>
        <Text variant="Body-XSmall" css={css({ mt: 16 })}>
          Photography by Lucia Braham
        </Text>
      </Wrapper>
      <TextSection />
      <TwoImageSection />
      <Wrapper>
        <Image
          alt=""
          src={ContPic3}
          layout="responsive"
          width="1460"
          height="820"
        ></Image>
        <Text variant="Body-XSmall" css={css({ mt: 16, mr: 40 })}>
          Photography by Lucia Braham
        </Text>
        <Text variant="Body-XSmall" css={css({ mt: 16 })}>
          Photography by Lucia Braham
        </Text>
      </Wrapper>
      <TextSection />
      <Row
        css={css({
          bg: "#FFFFF8",
          display: "flex",
          alignItems: "ceneter",
          justifyContent: "space-around",
          pb: 28,
          pt: 239,
        })}
      >
        <LinkWrapper>
          <Arrow type="short" direction="left" />
          <Link href="/">Previous article</Link>
        </LinkWrapper>

        <LinkWrapper>
          <Link href="/">Next article</Link>
          <Arrow type="short" direction="right" />
        </LinkWrapper>
      </Row>
      <LeftCol
        css={css({
          py: 80,
          bg: "#FFFFF8",
          px: 16,
        })}
      >
        <SahreLinkWrapper>
          <Link href="https://www.instagram.com/">Instagram</Link>
          <Arrow type="short" direction="right" />
        </SahreLinkWrapper>

        <SahreLinkWrapper>
          <Link href="https://www.facebook.com/login">Facebook</Link>
          <Arrow type="short" direction="right" />
        </SahreLinkWrapper>

        <SahreLinkWrapper>
          <Link href="https://www.linkedin.com/">Linkedin</Link>
          <Arrow type="short" direction="right" />
        </SahreLinkWrapper>
      </LeftCol>
    </div>
  );
};
export default BodyContent;
