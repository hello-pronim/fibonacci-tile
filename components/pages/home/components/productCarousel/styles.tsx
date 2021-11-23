import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Wrapper = styled("div")(
  css({
    position: "relative",
    gridColumn: "1 / span 12",
    py: 120,
    width: "100%",
  })
);

const SlideItem = styled("div")(
  css({
    position: "relative",
    maxWidth: 265,
  })
);

const ContentWrapper = styled("div")(
  css({
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: "auto",
    px: 40,
    zIndex: 9999,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: "white",
    width: "100%",
    span: {
      fontSize: 120,
      display: "flex",
      "&:first-child": {
        display: "flex",
        flex: 1,
      },
      "&:last-child": {
        display: "flex",
        justifyContent: "flex-end",
        flex: 1,
      },
    },
  })
);

const BottomBar = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    mt: 40,
  })
);

const ProgBar = styled("div")(
  css({
    width: "100%",
    height: "3px",
    bg: "border",
  })
);
const ProgBarInner = styled("div")(
  css({
    height: "3px",
    bg: "charcoal",
    transition: "ease all 0.3s",
  })
);

const BottomBarInner = styled("div")(
  css({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: 24,
  })
);

const Loader = styled("div")(({ prog }: { prog: number }) =>
  css({
    width: "auto",
    svg: {
      width: 30,
      height: 30,
      circle: {
        width: 30,
        height: 30,
        position: "absolute",
        fill: "none",
        strokeWidth: "3",
        transform: "translate(3px, 3px)",
        strokeDasharray: "73",
        strokeLinecap: "round",
        "&:nth-of-type(1)": {
          strokeDashoffset: 0,
          stroke: "rgba(212,212,216,0.5)",
        },
        "&:nth-of-type(2)": {
          strokeDashoffset: `calc(73 - (73 * ${prog}) / 100)`,
          stroke: "#fff",
          animation: "percent 1.5s linear",
          animationDelay: "1s",
        },
      },
    },
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "charcoal",
    },
  })
);

const NextWrapper = styled("button")(
  css({
    display: "none",
    border: "none",
    position: "absolute",
    right: 0,
    bg: "charcoal",
    px: 10,
    py: 10,
    cursor: "pointer",
    [theme.mediaQueries.medium]: {
      display: "block",
    },
  })
);

export {
  Wrapper,
  SlideItem,
  ContentWrapper,
  BottomBar,
  Loader,
  ProgBar,
  ProgBarInner,
  BottomBarInner,
  LinkWrapper,
  NextWrapper,
};
