import React from "react";
import Image from "next/image";
import HeroImage from "public/assets/temp/banner_about.png";
import {
  LeftCol,
  RightCol,
  ContentWrapper,
  Container,
  HeroWrapper,
  HeroTitle,
  HeroBodyText,
  HeroImageContainer,
} from "./styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <LeftCol>
          <ContentWrapper>
            <HeroTitle Base="h1" variant="Display-Large">
              Our Story
            </HeroTitle>
          </ContentWrapper>
        </LeftCol>
        <RightCol>
          <HeroBodyText Base="h4" variant="Display-Medium">
            Terrazzo, more than the sum of its parts
          </HeroBodyText>
        </RightCol>
      </Container>
      <HeroImageContainer>
        <Image
          src={HeroImage}
          alt="banner_about"
          layout="responsive"
          width="1920"
        />
      </HeroImageContainer>
    </HeroWrapper>
  );
};
export default Hero;
