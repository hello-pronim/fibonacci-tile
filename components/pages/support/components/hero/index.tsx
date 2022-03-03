import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import BreadCrumb from "@components/common/breadcrumb";
import getTextColor from "@utils/contrastAwareColors";
import avgBgColor from "@utils/avgBgColor";
import {
  Container,
  HeroTextWrapper,
  PrimaryText,
  SecondaryText,
} from "./styles";

const Hero = ({ pageTitle }) => {
  const [bgColor, setBgColor] = useState("");
  const bg = "./assets/temp/support-hero.jpg";
  const crumbs = [{ path: "/", name: "Home" }, { name: pageTitle }];

  useEffect(() => {
    avgBgColor(bg, setBgColor);
  }, []);

  return (
    <>
      <div
        css={css({
          maxWidth: "2560px",
          left: "28px",
          top: 92,
          pb: 0,
          position: "absolute",
          zIndex: 999,
        })}
      >
        <BreadCrumb
          crumbs={crumbs}
          pt={0}
          color={bgColor && getTextColor(bgColor)}
        />
      </div>
      <Container
    css={css({ backgroundImage: `url(${bg})` })}
    >
      <HeroTextWrapper>
        <PrimaryText
          variant="Display-Large"
          altFont
          css={css({ color: "white" })}
        >
          {pageTitle}
        </PrimaryText>
        <SecondaryText
          variant="Display-Overline"
          css={css({ textTransform: "uppercase", color: "white" })}
        >
          How can we help?
        </SecondaryText>
      </HeroTextWrapper>
    </Container>
    </>
  );
};

export default Hero;
