import React from "react";

import {
  LeftCol,
  RightCol,
  ContentWrapper,
  Container,
  HeroWrapper,
  HeroTitle,
  HeroBodyText
} from "./styles";

const Hero = ({component}) => {
  return (
    <HeroWrapper>
      <Container>
        <LeftCol>
          <ContentWrapper>
            <HeroTitle Base="h1" variant="Display-Large">
             {component?.headingLeft}
            </HeroTitle>
          </ContentWrapper>
        </LeftCol>
        <RightCol>
          <HeroBodyText Base="h4" variant="Display-Medium">
            {component?.textRight}
          </HeroBodyText>
        </RightCol>
      </Container>
    </HeroWrapper>
  );
};
export default Hero;
