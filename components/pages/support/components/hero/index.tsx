import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Text from "@components/common/typography";
import { Container } from "./styles";
import BreadCrumb from "@components/common/breadcrumb";
import getTextColor from "@utils/contrastAwareColors";
import avgBgColor from "@utils/avgBgColor";

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
          left: "32px",
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
      <Container css={css({ backgroundImage: `url(${bg})` })}>
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
          <Text variant="Display-Large" altFont css={css({ color: "white" })}>
            {pageTitle}
          </Text>
          <Text
            variant="Display-Overline"
            css={css({ textTransform: "uppercase", color: "white" })}
          >
            How can we help?
          </Text>
        </div>
      </Container>
    </>
  );
};

export default Hero;
