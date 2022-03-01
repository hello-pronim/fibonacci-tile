import React from "react";
import {
  LeftCol,
  RightCol,
  ContentWrapper,
  Container,
  HeroTitle,
  HeroBodyText,
} from "./styles";

const Hero = ({ heroDetails: { pageHeading, pageIntro } }) => {
  return (
    <Container>
      <LeftCol>
        <ContentWrapper>
          <HeroTitle as="h1" variant="Display-Large">
            {pageHeading}
          </HeroTitle>
        </ContentWrapper>
      </LeftCol>
      <RightCol>
        <HeroBodyText as="h4" variant="Display-Medium">
          {pageIntro}
        </HeroBodyText>
      </RightCol>
    </Container>
  );
};
export default Hero;
