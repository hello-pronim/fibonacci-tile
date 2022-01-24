import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const Container = styled("section")(
  css({
    width: "100%",
    overflow: "hidden",
  })
);

const SliderWrapper = styled("div")({
  width: "80%",
  ".slick-list": {
    overflow: "visible",
    padding: "0 20% 0 0",
  },
});

const SliderItem = styled("div")(
  css({
    position: "relative",
    cursor: "pointer",
  })
);

const BannerTextWrapper = styled("div")(
  css({
    position: "absolute",
    color: theme.colors.white,
    top: "50%",
    transform: "translateY(-50%)",
    left: "70px",
    width: "512px",
  })
);

const BannerSubHeading = styled("h3")(
  css({
    fontSize: "12px",
    lineHeight: 1.5,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  })
);

const BannerHeading = styled("h2")(
  css({
    fontSize: "80px",
    lineHeight: 1,
    paddingTop: "25px",
  })
);

const BannerDescription = styled("p")(
  css({
    fontSize: "20px",
    lineHeight: 1.6,
    fontWeight: 300,
    paddingTop: "25px",
  })
);

export {
  BannerTextWrapper,
  BannerDescription,
  BannerHeading,
  BannerSubHeading,
  Container,
  SliderItem,
  SliderWrapper,
};
