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

const ContentWrapper = styled("div")(
  css({
    display: "none",
    [theme.mediaQueries.medium]: {
      display: "flex",
    },
    position: "absolute",
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

const CounterWrapper = styled("div")(
  css({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    columnGap: 16,
    right: 40,
    bottom: 20,
    color: "white",
    fontFamily: 1,
    fontSize: 2,
    lineHeight: 0,
    fontWeight: 0,
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

export { Container, SlideItem, ContentWrapper, CounterWrapper, Loader };
