import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import { position } from "styled-system";

const SliderWrapper = styled("div")(() =>
  css({
    width: "100%"
  })
);

const SlideItem = styled("div")(() =>
  css({
    position: "relative",
  })
);

const BannerTextWrapper = styled("div")(() =>
  css({
    position: "absolute",
    color: "#ffffff",
    top: 250,
    left: 50,
    width: 512
  })
);

const BannerSubHeading = styled("h3")(() =>
  css({
    fontSize: 18,
    textTransform: "uppercase"
  })
);

const BannerHeading = styled("h2")(() =>
  css({
    fontSize: 80,
    lineHeight: "88px",
    textTransform: "uppercase",
    paddingTop: 60
  })
);

const BannerDescription = styled("p")(() =>
  css({
    fontSize: 20,
    lineHeight: "28px",
    fontWeight: 400,
    paddingTop: 16
  })
);

export {
  SliderWrapper,
  BannerTextWrapper,
  SlideItem,
  BannerSubHeading,
  BannerHeading,
  BannerDescription
};
