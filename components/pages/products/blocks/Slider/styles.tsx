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
