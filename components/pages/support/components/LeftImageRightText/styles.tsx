import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import theme from "styles/theme";

const Wrapper = styled("div")(() =>
  css({
    gridColumn: ["1 / span 2", "1 / span 6", "1 / span 6", "2 / span 10"],
    // gridColumn: ['2 / span 10'],
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    rowGap: 32,
    zIndex: 999,
    alignItems: "center",
  })
);

const Container = styled(Cntnr)(() =>
  css({
    paddingBottom: "40px",
    [theme.mediaQueries.small]: {
      paddingBottom: "80px",
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
      fontSize: "32px",
      lineHeight: "130%",
      marginBottom: "20px",
      letterSpacing: "-0.02em",
    },
    p: {
      color: theme.colors.charcoal,
      fontSize: "20px",
      lineHeight: "1.4",
      marginBottom: "20px",
    },
  })
);

export {Container, Wrapper, Panel, PanelLeft, PanelRight };
