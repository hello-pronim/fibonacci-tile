import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import { Container } from "@components/pages/support/sections/hero/styles";

const Panel = styled("section")(
  css({
    display: "flex",
    flexDirection: "column",
    [theme.mediaQueries.small]: {
      width: "100%",
      flexDirection: "row",
      padding: "0",
    },
  })
);

const PanelLeft = styled("div")(
  css({
    position: "relative",
    padding: "80px 16px 16px 16px",
    [theme.mediaQueries.small]: {
      width: "50%",
      padding: 0,
    },
    ">span": {
      display: "block",
      position: "relative",
      left: 0,
      top: 0,
      fontSize: "18px",
      lineHeight: "23.4px",
      writingMode: "unset",
      color: "black",
      [theme.mediaQueries.small]: {
        position: "absolute",
        left: "24px",
        top: "120px",
        fontSize: "26px",
        lineHeight: "33.8px",
        writingMode: "vertical-rl",
      },
    },
  })
);

const PanelRight = styled("div")(
  css({
    width: "100%",
    [theme.mediaQueries.small]: {
      width: "50%",
    },
  })
);

const StoryTitleWrapper = styled("div")(
  css({
    [theme.mediaQueries.small]: {
      paddingLeft: "240px",
    },
    h4: {
      color: theme.colors.charcoal,
      fontFamily: "Canela",
      fontSize: "32px",
      lineHeight: "130%",
      paddingTop: "56px",
      [theme.mediaQueries.small]: {
        fontSize: "42px",
        paddingTop: "120px",
      },
      "&.story-3": {
        fontFamily: "Everett",
        letterSpacing: "-0.01em",
        lineHeight: "115%",
        [theme.mediaQueries.small]: {
          fontSize: "44px",
        },
      },
    },
  })
);

const StoryContentWrapper = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    padding: "80px 16px",
    [theme.mediaQueries.small]: {
      paddingTop: "120px",
      px: 0,
    },
    p: {
      color: theme.colors.charcoal,
      fontSize: "20px",
      lineHeight: "28px",
      gridColumn: "1/span 12",
      [theme.mediaQueries.small]: {
        gridColumn: "1/span 9",
      },
    },
  })
);

const StoryImageWrapper = styled("div")(
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
      height: "400px!important",
      [theme.mediaQueries.small]: {
        height: "0px!important",
        position: "absolute!important",
      },
    },
  })
);

export {
  Panel,
  PanelLeft,
  PanelRight,
  StoryTitleWrapper,
  StoryContentWrapper,
  StoryImageWrapper,
};
