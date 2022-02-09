import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Container = styled("div")(
  css({
    mx: "auto",
    maxWidth: 2560,
    position: "relative",
    width: "100%",
  })
);

const SlideItem = styled("div")(
  css({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

const SlideImage = styled("div")(
  css({
    display: "none !important",
    "&: > *": { display: "none !important" },
    [theme.mediaQueries.small]: {
      display: "block !important",
    },
  })
);

const SlideImageMobile = styled("div")(
  css({
    display: "block !important",
    [theme.mediaQueries.small]: {
      display: "none !important",
    },
  })
);

const ContentWrapper = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    paddingTop: 110,
    paddingBottom: 24,
    px: 16,
    [theme.mediaQueries.small]: {
      alignItems: "center",
      flexDirection: "row",
      display: "flex",
      px: 40,
    },
    position: "absolute",
    justifyContent: "space-between",
    my: "auto",

    zIndex: 9999,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: "white",
    width: "100%",
    span: {
      fontSize: 56,
      display: "flex",
      justifyContent: "flex-end",
      [theme.mediaQueries.small]: {
        width: "initial",
      },
      [theme.mediaQueries.medium]: {
        fontSize: 120,
      },
      width: "100%",
      "&:first-child": {
        justifyContent: "flex-start",
        display: "flex",
        [theme.mediaQueries.small]: {
          flex: 1,
        },
      },
      "&:last-child": {
        display: "flex",
        justifyContent: "flex-start",
        [theme.mediaQueries.small]: { justifyContent: "flex-end", flex: 1 },
      },
    },
  })
);

const CounterWrapper = styled("div")(
  css({
    position: "absolute",
    display: "none",
    alignItems: "center",
    columnGap: 16,
    right: 40,
    bottom: 20,
    color: "white",
    fontFamily: 1,
    fontSize: 2,
    lineHeight: 0,
    fontWeight: 0,
    [theme.mediaQueries.small]: {
      display: "flex",
    },
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

const SliderText = styled("h1")(
  css({
    maxWidth: "1024px",
    fontFamily: "Canela",
    fontSize: "42px",
    lineHeight: "54.6px",
    color: theme.colors.white,
    margin: "auto",
  })
);

export {
  Container,
  SlideItem,
  ContentWrapper,
  CounterWrapper,
  Loader,
  SlideImage,
  SliderText,
};
