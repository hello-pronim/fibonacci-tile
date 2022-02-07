import React from "react";
import Image from "next/image";
import {
  HeroImageContainer,
} from "./styles";

const HeroImage = ({component}) => {
  return (
      <>
      <HeroImageContainer>
        <Image
          src={component?.image[0]?.url}
          alt="banner_about"
          width="1920"
          height="810"
        />
      </HeroImageContainer>
      </>
  );
};
export default HeroImage;
