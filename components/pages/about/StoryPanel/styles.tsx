import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

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
      lineHeight: "43.2px",
      paddingTop: "56px",
      [theme.mediaQueries.small]: {
        fontSize: "42px",
        lineHeight: "54.6px",
        paddingTop: "120px",
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
