import React, { useState } from "react";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import Image from "next/image";
import moment from 'moment';
import ArrowButton from "@components/common/button/arrowButton";
import Slide1 from "public/assets/temp/gallery-1.jpg";
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
import mockData from "./constants";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "@styles/theme";

interface accordionTypes {
  accentText: string;
  product: any;
}

const ProjectsModule = ({ accentText, product }: accordionTypes) => {
  console.log("product", product)
  const {project1, project2} = product;
  console.log("porject1", project1);
  return (
    <Container id="projects">
      <AccentText top={400}>{accentText}</AccentText>
      <IntroWrapper>
        <Text
          variant="Display-Medium"
          altFont
          css={css({
            fontSize: 24,
            [theme.mediaQueries.small]: {
              fontSize: 42,
            },
          })}
          dangerouslySetInnerHTML={{__html: product.projectIntroduction}}
        >
        </Text>
      </IntroWrapper>
      <Sections>
        <Text variant="Display-Overline">SECTIONS</Text>
        <SectionList>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#projects"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Products in use
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#gallery"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Gallery
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#technical-specifications"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Technical specs
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#related-products"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Related products
              </a>
            </Text>
          </SectionItem>
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
         { project1[0].heroImage?.length && (
          <ImageWrapper>
            <Image
              src={project1[0].heroImage[0].url}
              alt="image-1"
              layout="responsive"
              width="710"
              height="900"
            />
          </ImageWrapper>
          )}
          {project1[0]?.projectCompleted && (
            <Text variant="Body-Small" css={css({ gridRow: 2, gridColumn: 1 })}>
              {moment(project1[0]?.projectCompleted).format('MMMM YYYY')}
            </Text>
          )}
          <Details>
            <Text variant="Display-XSmall">{project1[0].title}</Text>
            <Text variant="Display-XSmall" color={theme.colors.concrete}>
              {project1[0].location}
            </Text>
            <LinkWrapper>
              <Link href={project1[0].slug}>View Project</Link>
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
          { project2[0].heroImage?.length && (
          <ImageWrapper>
            <Image
              src={project2[0].heroImage[0].url}
              alt="image-1"
              layout="responsive"
              width="710"
              height="900"
            />
          </ImageWrapper>
          )}
          {project2[0]?.projectCompleted && (
            <Text variant="Body-Small" css={css({ gridRow: 2, gridColumn: 1 })}>
               {moment(project2[0]?.projectCompleted).format('MMMM YYYY')}
            </Text>
          )}
          <Details>
            <Text variant="Display-XSmall">{project2[0].title}</Text>
            <Text variant="Display-XSmall" color={theme.colors.concrete}>
              {project2[0].location}
            </Text>
            <LinkWrapper>
              <Link href={project2[0].slug}>View Project</Link>
              <Arrow type="short" />
            </LinkWrapper>
          </Details>
        </Project>
      )}
      <Bottom>
        <ArrowButton mode="" title="How to order samples" link="/how-to-order-samples" />
      </Bottom>
    </Container>
  );
};

export default ProjectsModule;
