import React, { useState, useEffect } from "react";
import Text from "@components/common/typography";
import Slider from "react-slick";
import Image from "next/image";
import supportHero from "public/assets/temp/support-hero.jpg";
import Slide1Mobile from "public/assets/temp/home-slide-1-mobile.jpg";
import { Container } from "./styles";
import { css } from "@emotion/react";

const Hero = () => {
  return (
    <Container
      css={css({ backgroundImage: "url(/assets/temp/support-hero.jpg)" })}
    >
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 32,
          paddingTop: 120,
          paddingBottom: 120,
        })}
      >
        <Text variant="Display-Large" altFont>
          Product Support
        </Text>
        <Text
          variant="Display-Overline"
          css={css({ textTransform: "uppercase" })}
        >
          How can we help?
        </Text>
      </div>
    </Container>
  );
};

export default Hero;
