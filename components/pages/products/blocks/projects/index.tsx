import React, { useState } from "react";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import Slide1 from "public/assets/temp/gallery-1.png";
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
}

const ProjectsModule = ({ accentText }: accordionTypes) => {
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
        >
          Complex, random, and swarming with polarity - the hallmarks of any
          great political system. There&apos;s bent and straight, cool and warm,
          light and dark, and with the odd bit of red and green thrown in to
          keep it honest.
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
      <Project
        css={{
          gridColumn: "1 / span 2",
          [theme.mediaQueries.small]: {
            gridColumn: "2 / span 5",
          },
        }}
      >
        <ImageWrapper>
          <Image
            src={Slide1}
            alt="image-1"
            layout="responsive"
            width="710"
            height="900"
          />
        </ImageWrapper>
        <Text variant="Body-Small" css={css({ gridRow: 2, gridColumn: 1 })}>
          Month, 2021
        </Text>
        <Details>
          <Text variant="Display-XSmall">Project Name Goes Here</Text>
          <Text variant="Display-XSmall" color={theme.colors.concrete}>
            City, Country
          </Text>
          <LinkWrapper>
            <Link href="#">View Project</Link>
            <Arrow type="short" />
          </LinkWrapper>
        </Details>
      </Project>
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
        <ImageWrapper>
          <Image
            src={Slide1}
            alt="image-1"
            layout="responsive"
            width="710"
            height="900"
          />
        </ImageWrapper>
        <Text variant="Body-Small" css={css({ gridRow: 2, gridColumn: 1 })}>
          Month, 2021
        </Text>
        <Details>
          <Text variant="Display-XSmall">Project Name Goes Here</Text>
          <Text variant="Display-XSmall" color={theme.colors.concrete}>
            City, Country
          </Text>
          <LinkWrapper>
            <Link href="#">View Project</Link>
            <Arrow type="short" />
          </LinkWrapper>
        </Details>
      </Project>
      <Bottom>
        <ArrowButton mode="" title="How to order samples" link="#" />
      </Bottom>
    </Container>
  );
};

export default ProjectsModule;
