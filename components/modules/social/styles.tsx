import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import theme from "styles/theme";

const Container = styled(Cntnr)(() =>
  css({
    bg: "white",
    pl: 80,
    pr: "0 !important",
    pt: 80,
    pb: 80,
    overflowX: "hidden",
    [theme.mediaQueries.small]: {
      pb: 120,
    },
  })
);

const TextWrapper = styled("div")(() =>
  css({
    gridColumn: ["1 / span 2", "1 / span 6", "2 / span 12"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    pt: 40,
    p: {
      color: "secondary",
      a: {
        color: "charcoal",
      },
    },
  })
);

const ImageWrapper = styled("div")(() =>
  css({
    gridColumn: ["1 / span 2", "1  / span 6", "1 / span 6", "2 / span 12"],
    div: {
      flex: "none",
    },
    // gridColumn: ['2 / span 12'],
    display: "flex",
    justifyContent: "flex-start",
  })
);

export { Container, TextWrapper, ImageWrapper };
