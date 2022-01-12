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
import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "@stylestheme";

interface accordionTypes {
  accentText: string;
}

const ProjectsModule = ({ accentText }: accordionTypes) => {
  return (
    <Container>
      <AccentText top={400}>{accentText}</AccentText>
      <IntroWrapper>
        <Text variant="Display-Medium" altFont>
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
            <Text variant="Body-Regular">Products in use</Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">Gallery</Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">Technical specs</Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">Related products</Text>
          </SectionItem>
        </SectionList>
      </Sections>
      <Project css={{ gridColumn: "2 / span 5" }}>
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
      <Project css={{ gridColumn: "7 / span 5" }}>
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
