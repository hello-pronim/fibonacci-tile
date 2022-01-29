import React from "react";
import Image from "next/image";

import HeroImage from "public/assets/temp/banner_support.png";

import { Container, HeroImageWrapper } from "./styles";

const Hero = () => {
  return (
    <Container>
      <HeroImageWrapper>
        <Image
          alt="banner-support"
          src={HeroImage}
          layout="responsive"
          height="600"
        />
      </HeroImageWrapper>
    </Container>
  );
};
export default Hero;
