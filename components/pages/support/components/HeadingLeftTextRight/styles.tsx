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
    alignItems: "flex-start",
  })
);

const Container = styled(Cntnr)(() =>
  css({
    py: "40px",
    marginBottom: "20px",
    [theme.mediaQueries.small]: {
      py: "40px",
      marginBottom: "70px",
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
    ">span": {
      display: "block",
      position: "relative",
      left: "20px",
      top: "50px",
      fontSize: "18px",
      lineHeight: "1.4",
      writingMode: "unset",
      color: "black",
      letterSpacing: "-0.01em",
      height: "max-content",
      [theme.mediaQueries.small]: {
        position: "absolute",
        fontSize: "26px",
        writingMode: "vertical-rl",
      },
    },
  })
);

const PanelRight = styled("div")(
  css({
    width: "100%",
    [theme.mediaQueries.small]: {
      width: "40%",
    },
  })
);

const StoryTitleWrapper = styled("div")(
  css({
    h4: {
      color: theme.colors.charcoal,
      fontFamily: "Canela",
      fontSize: "32px",
      lineHeight: "140%",
      marginBottom: "30px",
      [theme.mediaQueries.small]: {
        fontSize: "42px",
      },
    },
  })
);

const StoryContentWrapper = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    [theme.mediaQueries.small]: {
      px: 0,
    },
    p: {
      color: theme.colors.charcoal,
      fontSize: "20px",
      lineHeight: "1.4",
      gridColumn: "1/span 12",
      marginBottom: "20px",
    },
  })
);

const StoryImageWrapper = styled("div")(
  css({
    width: "100%",
  })
);

export {
  Container,
  Wrapper,
  Panel,
  PanelLeft,
  PanelRight,
  StoryTitleWrapper,
  StoryContentWrapper,
  StoryImageWrapper,
};
