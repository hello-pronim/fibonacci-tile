import React from "react";
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
} from "./styles";
import AddIcon from "@components/icons/add";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const Hero = () => {
  return (
    <Container css={css({ pt: 160, pb: 48 })}>
      <LeftCol>
        <ContentWrapper>
          <Text Base="h1" variant="Display-Large">
            Fibonacci Live
          </Text>
        </ContentWrapper>
      </LeftCol>
      <RightCol>
        <Text Base="h4" variant="Display-Medium">
          Elementum phasellus ligula adipiscing eu sed. Id id ut volutpat tempus
          viverra vestibulum risus pulvinar mollis. Etiam id congue
        </Text>
      </RightCol>
    </Container>
  );
};
export default Hero;
