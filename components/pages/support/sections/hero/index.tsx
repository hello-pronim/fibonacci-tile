import React, { useEffect, useState } from "react";
import Image from "next/image";

import HeroImage from "public/assets/temp/banner_support.png";

import {
  Container,
  HeroImageWrapper,
  HeroTextContainer,
  HeroTextWrapper,
  HeroPrimaryText,
  HeroSecondaryText,
} from "./styles";

const Hero = ({ activeSupport }) => {
  const [heroPrimaryText, setHeroPrimaryText] = useState("");

  useEffect(() => {
    if (activeSupport === "how-to-order-samples")
      setHeroPrimaryText("How to order samples");
    else if (activeSupport === "quote-request")
      setHeroPrimaryText("Request a quote");
    else if (activeSupport === "general-enquiry")
      setHeroPrimaryText("General enquiry");
    else setHeroPrimaryText("Product support");
  }, [activeSupport]);

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
      <HeroTextContainer>
        <HeroTextWrapper>
          <HeroPrimaryText>{heroPrimaryText}</HeroPrimaryText>
          <HeroSecondaryText>How can we help?</HeroSecondaryText>
        </HeroTextWrapper>
      </HeroTextContainer>
    </Container>
  );
};
export default Hero;
