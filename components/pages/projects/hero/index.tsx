import React from "react";
import Button from "@components/common/button";
import Text from "@components/common/typography";
import Image from "next/image";
import heroImage from "public/assets/temp/project-hero.png";
import {
  LeftCol,
  RightCol,
  Pill,
  ContentWrapper,
  DetailsWrapper,
  Detail,
  Container,
  HeroTitle,
  HeroBodyText,
} from "./styles";
import css from "@styled-system/css";

import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <Container>
      <LeftCol>
        <ContentWrapper>
          <HeroTitle Base="h1" variant="Display-Large">
            Fibonacci Live
          </HeroTitle>
        </ContentWrapper>
      </LeftCol>
      <RightCol>
        <HeroBodyText Base="h4" variant="Display-Medium">
          Elementum phasellus ligula adipiscing eu sed. Id id ut volutpat tempus
          viverra vestibulum risus pulvinar mollis. Etiam id congue
        </HeroBodyText>
      </RightCol>
    </Container>
  );
};
export default Hero;
