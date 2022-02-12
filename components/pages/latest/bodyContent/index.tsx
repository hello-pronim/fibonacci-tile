import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import Arrow from "@components/common/icons/arrow";
import ContentFullWidth from "./ContentFullWidth";
import HeroImageFullWidth from "./HeroImageFullWidth";
import LargeImage from "./LargeImage";
import PullQuote from "./PullQuote";
import TwoColImage from "./TwoColmages";
import FollowSection from "./FollowSection";
import { LinkWrapper } from "../styles";
import { LeftCol, TextCol, Wrapper, SahreLinkWrapper, Row } from "./styles";
import ContPic3 from "public/assets/latest-news/single-page/single-page3.png";
import { CaptionText } from "@components/pages/products/blocks/CollectionHero/styles";

const BodyContent = ({ pageData }) => {
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
      {pageData.newsComponents.map((component: any, index: any) => {
        switch (component.typeHandle) {
          case "heroImageFullWidth":
            return (
              <>
                {component?.imageThumb?.[0].url && (
                  <HeroImageFullWidth
                    key={`news-comp-${index}`}
                    image={component.imageThumb[0]}
                  />
                )}
              </>
            );
          case "contentFullWidth":
            return (
              <ContentFullWidth
                key={`news-comp-${index}`}
                content={component.contentText}
              />
            );
          case "pullQuote":
            return (
              <PullQuote key={`news-comp-${index}`} quote={component.quote} />
            );
          case "twoColImages":
            return (
              <TwoColImage
                key={`news-comp-${index}`}
                image1={component.image1Thumb}
                image2={component.image2Thumb}
                caption={component.caption}
              />
            );
          case "largeImage":
            return (
              <>
                {component?.imageThumb?.[0].url && (
                  <LargeImage
                    key={`news-comp-${index}`}
                    image={component?.imageThumb?.[0]}
                    caption={component.caption}
                  />
                )}
              </>
            );
        }
      })}
      <FollowSection />
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
