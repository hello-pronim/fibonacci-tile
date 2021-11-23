import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const AccentText = styled("span")(({ top }: { top?: number }) =>
  css({
    left: 24,
    position: "absolute",
    textOrientation: "mixed",
    writingMode: "vertical-rl",
    top: top && top,
    fontFamily: 1,
    fontWeight: 0,
    color: "charcoal",
    fontSize: 5,
    lineHeight: 2,
    letterSpacing: 0,
    display: "none",
    [theme.mediaQueries.medium]: {
      display: "block",
    },
  })
);

export default AccentText;
