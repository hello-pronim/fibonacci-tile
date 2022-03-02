import React, { useState } from "react";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import Image from "next/image";
import moment from "moment";
import ArrowButton from "@components/common/button/arrowButton";
import Link from "next/link";
import {
  Container,
  IntroWrapper,
  Sections,
  ProjectWrapper,
  Project,
  Bottom,
  SectionList,
  SectionItem,
  Details,
  ImageWrapper,
  LinkWrapper,
} from "./styles";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "@styles/theme";

interface ProjectModuleTypes {
  accentText: string;
  product: any;
  specifications: any;
  relatedProducts: any;
}

const ProjectsModule = ({
  accentText,
  product,
  specifications,
  relatedProducts,
}: ProjectModuleTypes) => {
  const { project1, project2, backgroundColor } = product;

  const handleSectionLinkClick = (e, elementId) => {
    e.preventDefault();

    const element = document.getElementById(elementId);

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      id="projects"
      css={css({ bg: backgroundColor ? backgroundColor : "#E2E9EC" })}
    >
      {(project1?.length > 0 || project1?.length > 0) && (
        <AccentText top={420}>{accentText}</AccentText>
      )}
      <IntroWrapper
        css={css({
          pb: project1?.length === 0 && project2?.length === 0 && 0,
        })}
      >
        <Text
          variant="Display-Medium"
          altFont
          css={css({
            fontSize: 24,
            [theme.mediaQueries.small]: {
              fontSize: 42,
            },
          })}
          dangerouslySetInnerHTML={{ __html: product.projectIntroduction }}
        ></Text>
      </IntroWrapper>
      <Sections>
        <Text variant="Display-Overline">SECTIONS</Text>
        <SectionList>
          {(project1?.length > 0 || project2?.length > 0) && (
            <SectionItem>
              <Text variant="Body-Regular">
                <a
                  href="#projects"
                  onClick={(e) => handleSectionLinkClick(e, "products")}
                  css={css({ color: "inherit", textDecoration: "none" })}
                >
                  Products in use
                </a>
              </Text>
            </SectionItem>
          )}
          {product?.gallery?.length > 0 && (
            <SectionItem>
              <Text variant="Body-Regular">
                <a
                  href="#gallery"
                  onClick={(e) => handleSectionLinkClick(e, "gallery")}
                  css={css({ color: "inherit", textDecoration: "none" })}
                >
                  Gallery
                </a>
              </Text>
            </SectionItem>
          )}
          {specifications?.length > 0 && (
            <SectionItem>
              <Text variant="Body-Regular">
                <a
                  href="#technical-specifications"
                  onClick={(e) =>
                    handleSectionLinkClick(e, "technical-specifications")
                  }
                  css={css({ color: "inherit", textDecoration: "none" })}
                >
                  Technical specs
                </a>
              </Text>
            </SectionItem>
          )}
          {relatedProducts?.length > 0 && (
            <SectionItem>
              <Text variant="Body-Regular">
                <a
                  href="#related-products"
                  onClick={(e) => handleSectionLinkClick(e, "related-products")}
                  css={css({ color: "inherit", textDecoration: "none" })}
                >
                  Related products
                </a>
              </Text>
            </SectionItem>
          )}
        </SectionList>
      </Sections>
      {project1?.length > 0 && (
        <Project
          css={{
            gridColumn: "1 / span 2",
            [theme.mediaQueries.small]: {
              gridColumn: "2 / span 5",
            },
          }}
        >
          {project1[0].heroImageThumb?.[0]?.url && (
            <ImageWrapper href={`/in-use/${project1[0].slug}`}>
              <Image
                placeholder="blur"
                blurDataURL={project1[0].blurThumb[0].url}
                src={project1[0].heroImageThumb[0].url}
                alt={project1[0].heroImageThumb[0].title}
                layout="responsive"
                width="710"
                height="900"
              />
            </ImageWrapper>
          )}
          {project1[0]?.projectCompleted && (
            <Text variant="Body-Small" css={css({ gridRow: 2, gridColumn: 1 })}>
              {moment(project1[0]?.projectCompleted).format("MMMM YYYY")}
            </Text>
          )}
          <Details>
            <Text variant="Display-XSmall">{project1[0].title}</Text>
            <Text variant="Display-XSmall" color={theme.colors.concrete}>
              {project1[0].location}
            </Text>
            <LinkWrapper>
              <Link href={`/in-use/${project1[0].slug}`}>View Project</Link>
              <Arrow type="short" />
            </LinkWrapper>
          </Details>
        </Project>
      )}
      {project2?.length > 0 && (
        <Project
          css={{
            gridColumn: "1 / span 2",
            gridRow: 3,
            [theme.mediaQueries.small]: {
              gridColumn: "7 / span 5",
              gridRow: 2,
            },
          }}
        >
          {project2[0].heroImageThumb?.[0]?.url && (
            <ImageWrapper href={`/in-use/${project2[0].slug}`}>
              <Image
                placeholder="blur"
                blurDataURL={project2[0].blurThumb[0].url}
                src={project2[0].heroImageThumb[0].url}
                alt={project2[0].heroImageThumb[0].title}
                layout="responsive"
                width="710"
                height="900"
              />
            </ImageWrapper>
          )}
          {project2[0]?.projectCompleted && (
            <Text variant="Body-Small" css={css({ gridRow: 2, gridColumn: 1 })}>
              {moment(project2[0]?.projectCompleted).format("MMMM YYYY")}
            </Text>
          )}
          <Details>
            <Text variant="Display-XSmall">{project2[0].title}</Text>
            <Text variant="Display-XSmall" color={theme.colors.concrete}>
              {project2[0].location}
            </Text>
            <LinkWrapper>
              <Link href={`/in-use/${project2[0].slug}`}>View Project</Link>
              <Arrow type="short" />
            </LinkWrapper>
          </Details>
        </Project>
      )}
      {(project1?.length > 0 || project1?.length > 0) && (
        <Bottom>
          <ArrowButton mode="" title="View all projects" link="/in-use" />
        </Bottom>
      )}
    </Container>
  );
};

export default ProjectsModule;
