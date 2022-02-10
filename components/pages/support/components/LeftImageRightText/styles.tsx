import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Panel = styled("section")(
  css({
    display: "flex",
    flexDirection: "column",
    py: 120,
    [theme.mediaQueries.small]: {
      width: "100%",
      flexDirection: "row",
      py: 20,
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

export { Panel, PanelLeft, PanelRight };
