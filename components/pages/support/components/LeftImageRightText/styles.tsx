import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import theme from "styles/theme";

const Wrapper = styled("div")(() =>
  css({
    gridColumn: ["1 / span 2", "1 / span 6", "1 / span 6", "2 / span 10"],
    // gridColumn: ['2 / span 10'],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 32,
    zIndex: 999,
    alignItems: "center",
    [theme.mediaQueries.small]: {
      flexDirection: "row",
    },
  })
);

const Container = styled(Cntnr)(() =>
  css({
    paddingBottom: "80px",
    [theme.mediaQueries.small]: {
      paddingBottom: "100px",
    },
  })
);

const Panel = styled("section")(
  css({
    display: "block",
  })
);

const PanelLeft = styled("div")(
  css({
    [theme.mediaQueries.small]: {
      width: "50%",
      padding: 0,
    },
    // ">span": {
    //   display: "block",
    //   position: "relative",
    //   left: 0,
    //   top: 0,
    //   fontSize: "18px",
    //   lineHeight: "23.4px",
    //   writingMode: "unset",
    //   color: "black",
    //   [theme.mediaQueries.small]: {
    //     position: "absolute",
    //     left: "24px",
    //     top: "120px",
    //     fontSize: "26px",
    //     lineHeight: "33.8px",
    //     writingMode: "vertical-rl",
    //   },
    // },
  })
);

const PanelRight = styled("div")(
  css({
    width: "100%",
    [theme.mediaQueries.small]: {
      width: "40%",
    },
    h2: {
      color: theme.colors.charcoal,
      fontSize: "18px",
      lineHeight: "130%",
      marginBottom: "32px",
      letterSpacing: "-0.02em",
      [theme.mediaQueries.small]: {
        fontSize: "32px",
        marginBottom: "20px",
      },
    },
    p: {
      color: theme.colors.charcoal,
      fontSize: "16px",
      lineHeight: "1.4",
      marginBottom: "20px",
      [theme.mediaQueries.small]: {
        fontSize: "20px",
      },
    },
  })
);

const ImageWrapper = styled("div")(
  css({
    width: "100%",
    "& > div": {
      position: "unset!important",
      [theme.mediaQueries.small]: {
        position: "relative!important",
      },
      "& >div": {
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
      height: "100%!important",
      [theme.mediaQueries.small]: {
        height: "100%!important",
        position: "absolute!important",
      },
    },
  })
);

export { Container, Wrapper, ImageWrapper, Panel, PanelLeft, PanelRight };
