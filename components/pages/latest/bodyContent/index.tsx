import React from "react";
import Link from "next/link";
import css from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import ContentFullWidth from "./ContentFullWidth";
import HeroImageFullWidth from "./HeroImageFullWidth";
import LargeImage from "./LargeImage";
import PullQuote from "./PullQuote";
import TwoColImage from "./TwoColmages";
import FirstContentSection from "./FirstContentSection";
import { LinkWrapper } from "../styles";
import { LeftCol, SahreLinkWrapper, Row } from "./styles";

const BodyContent = ({ pageData }) => {
  let fistContentUsed = false;
  return (
    <div style={{ paddingTop: "55px" }}>
      {pageData.newsComponents.map((component: any, index: any) => {
        switch (component.typeHandle) {
          case "heroImageFullWidth":
            return (
              <React.Fragment key={`news-comp-${index}`}>
                {component?.imageThumb?.[0].url && (
                  <HeroImageFullWidth
                    key={`news-comp-${index}`}
                    image={component.imageThumb[0]}
                  />
                )}
              </React.Fragment>
            );
          case "contentFullWidth":
            if (!fistContentUsed) {
              fistContentUsed = true;
              return (
                <FirstContentSection
                  key={`news-comp-${index}`}
                  content={component.contentText}
                />
              );
            }
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
              <React.Fragment key={`news-comp-${index}`}>
                {component?.imageThumb?.[0].url && (
                  <LargeImage
                    key={`news-comp-${index}`}
                    image={component?.imageThumb?.[0]}
                    caption={component.caption}
                  />
                )}
              </React.Fragment>
            );
        }
      })}
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
        {pageData.prev && (
          <LinkWrapper>
            <Arrow type="short" direction="left" />
            <Link href={`/the-latest/${pageData.prev.slug}`}>Previous article</Link>
          </LinkWrapper>
        )}

        {pageData.next && (
          <LinkWrapper>
            <Link href={`/the-latest/${pageData.next.slug}`}>Next article</Link>
            <Arrow type="short" direction="right" />
          </LinkWrapper>
        )}
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
