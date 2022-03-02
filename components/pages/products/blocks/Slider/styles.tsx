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
  width: "66.7%",
  [theme.mediaQueries.small]: {
    width: "80%",
  },
  ".slick-list": {
    overflow: "visible",
    padding: "0 20% 0 0",
  },
});

const SliderItem = styled("div")(
  css({
    position: "relative",
    cursor: "pointer",
    width: "100%",
    "& > div:first-child": {
      position: "unset!important",
      [theme.mediaQueries.small]: {
        position: "relative!important",
      },
      "& >div:first-child": {
        display: "none!important",
        [theme.mediaQueries.small]: {
          display: "block!important",
        },
      },
    },
    ".image": {
      objectFit: "cover!important",
      width: "100%!important",
      position: "relative!important",
      height: "480px!important",
      [theme.mediaQueries.small]: {
        height: "0px!important",
        position: "absolute!important",
      },
    },
  })
);

const BannerTextWrapper = styled("div")(
  css({
    position: "absolute",
    color: theme.colors.white,
    left: "16px",
    top: "160px",
    [theme.mediaQueries.small]: {
      top: "50%",
      left: "70px",
      width: "512px",
      transform: "translateY(-50%)",
    },
  })
);

const BannerSubHeading = styled("h3")(
  css({
    fontSize: "12px",
    lineHeight: "16.8px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  })
);

const BannerHeading = styled("h2")(
  css({
    fontSize: "44px",
    lineHeight: "50.6px",
    paddingTop: "8px",
    [theme.mediaQueries.small]: {
      fontSize: "80px",
      lineHeight: "88px",
      paddingTop: "16px",
    },
  })
);

const BannerDescription = styled("p")(
  css({
    width: "80%",
    fontSize: "16px",
    lineHeight: "22.4px",
    paddingTop: "8px",
    [theme.mediaQueries.small]: {
      fontSize: "20px",
      lineHeight: "28px",
      paddingTop: "16px",
    },
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    svg: {
      transition: "ease all 0.3s",
    },
    "&:hover": {
      svg: {
        transform: "translateX(6px)",
      },
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "white",
      "&:before": {
        position: "relative",
        backgroundColor: "white",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
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
  LinkWrapper,
};
