import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Panel = styled("section")(
  css({
    position: "relative",
    paddingLeft: "240px",
    paddingRight: "240px",
  })
);

const Container = styled("div")(
  css({
    paddingTop: "120px",
    paddingBottom: "120px",
  })
);

const StoryTitleWrapper = styled("div")(css({}));

const StoryTitle = styled("div")(
  css({
    h4: {
      fontFamily: "Canela",
      fontSize: "42px",
      lineHeight: "54.6px",
    },
  })
);

const StorySubTitle = styled("div")(
  css({
    h4: {
      fontFamily: "Canela",
      fontSize: "42px",
      lineHeight: "54.6px",
      color: theme.colors.taupeTints[5],
    },
  })
);

const StoryImageWrapper = styled("div")(
  css({
    width: "100%",
    paddingTop: "120px",
    paddingBottom: "120px",
  })
);

const StoryContentWrapper = styled("div")(
  css({
    display: "flex",
  })
);

const StoryContentWrapperLeft = styled("div")(
  css({
    flex: "1 1",
  })
);

const StoryContentWrapperRight = styled("div")(
  css({
    flex: "1 1",
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
