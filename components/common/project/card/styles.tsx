import theme from "styles/theme";
import css from "@styled-system/css";
import styled from "@emotion/styled";

 
const Details = styled("div")(() =>
  css({
    gridRow: 2,
    gridColumn: 2,
    display: "flex",
    flexDirection: "column",
  })
);

const ImageWrapper = styled("div")(() =>
  css({
    position: "relative",
    gridColumn: "1 / span 2",
    gridRow: 1,
  })
);

const Project = styled("div")(() =>
  css({
    gridRow: 2,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: 24,
    pt: 40,
    pb: 40,
    "&:first-child": {
      pt: 0,
    },
    "&:last-child": {
      pb: 0,
    },
    [theme.mediaQueries.small]: {
      pt: 100,
      pb: 100,
    },
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    fontWeight: 500,
    mt: 16,
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
      color: "charcoal",
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
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
  Details,
  ImageWrapper,
  LinkWrapper,
  Project
};
