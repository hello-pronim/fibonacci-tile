import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Panel = styled("section")(
  css({
    position: "relative",
    padding: "80px 0px",
    [theme.mediaQueries.small]: {
      padding: "0 240px",
    },
    ">span": {
      display: "block",
      position: "relative",
      left: 0,
      top: 0,
      fontSize: "18px",
      lineHeight: "23.4px",
      writingMode: "unset",
      paddingLeft: "20px",
      paddingRight: "20px",
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

const Container = styled("div")(
  css({
    paddingTop: "56px",
    paddingBottom: "56px",
    [theme.mediaQueries.small]: {
      paddingTop: "120px",
      paddingBottom: "120px",
    },
  })
);

const StoryTitleWrapper = styled("div")(
  css({
    padding: "0px 16px",
    [theme.mediaQueries.small]: {
      padding: 0,
    },
  })
);

const StoryTitle = styled("div")(
  css({
    h4: {
      fontFamily: "Canela",
      fontSize: "32px",
      lineHeight: "43.2px",
      [theme.mediaQueries.small]: {
        fontSize: "42px",
        lineHeight: "54.6px",
      },
    },
  })
);

const StorySubTitle = styled("div")(
  css({
    h4: {
      fontFamily: "Canela",
      color: theme.colors.taupeTints[5],
      fontSize: "32px",
      lineHeight: "43.2px",
      [theme.mediaQueries.small]: {
        fontSize: "42px",
        lineHeight: "54.6px",
      },
    },
  })
);

const StoryImageWrapper = styled("div")(
  css({
    width: "100%",
    paddingTop: "80px",
    paddingBottom: "80px",
    [theme.mediaQueries.small]: {
      paddingTop: "120px",
      paddingBottom: "120px",
    },
  })
);

const StoryContentWrapper = styled("div")(
  css({
    display: "flex",
  })
);

const StoryContentWrapperLeft = styled("div")(
  css({
    display: "none",
    [theme.mediaQueries.small]: {
      display: "flex",
      flex: "1 1",
    },
  })
);

const StoryContentWrapperRight = styled("div")(
  css({
    flex: "1 1",
    padding: "0 16px",
    [theme.mediaQueries.small]: {
      padding: 0,
    },
    p: {
      fontSize: "20px",
      lineHeight: "28px",
    },
  })
);

export {
  Panel,
  Container,
  StoryTitleWrapper,
  StoryTitle,
  StorySubTitle,
  StoryImageWrapper,
  StoryContentWrapper,
  StoryContentWrapperLeft,
  StoryContentWrapperRight,
};
