import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Panel = styled("section")(
  css({
    display: "flex",
    width: "100%",
  })
);

const PanelLeft = styled("div")(
  css({
    position: "relative",
    width: "50%",
  })
);

const PanelRight = styled("div")(
  css({
    width: "50%",
  })
);

const StoryTitleWrapper = styled("div")(
  css({
    paddingLeft: "240px",
    h4: {
      fontFamily: "Canela",
      fontSize: "42px",
      lineHeight: "54.6px",
      paddingTop: "120px",
    },
  })
);

const StoryContentWrapper = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    paddingTop: "120px",
    paddingBottom: "60px",
    p: {
      gridColumn: "1/span 9",
      fontSize: "20px",
      lineHeight: "28px",
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
