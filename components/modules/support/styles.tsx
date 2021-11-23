import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import theme from "styles/theme";

const Container = styled(Cntnr)(() =>
  css({
    bg: "background",
  })
);

const Wrapper = styled("div")(() =>
  css({
    gridColumn: ["1 / span 2", "1 / span 6", "1 / span 6", "2 / span 10"],
    // gridColumn: ['2 / span 10'],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: 32,
    transform: "translateY(116px)",
    zIndex: 999,
  })
);

const TileWrapper = styled("div")(
  css({
    width: "100%",
    display: "flex",
    columnGap: "1px",
    rowGap: "1px",
    flexDirection: "column",
    [theme.mediaQueries.medium]: {
      flexDirection: "row",
    },
  })
);

const Tile = styled("a")(
  css({
    position: "relative",
    display: "inline-flex",
    width: "100%",
    textDecoration: "none",
    [theme.mediaQueries.medium]: {
      paddingBottom: "25%",
      width: "25%",
    },
    py: 40,
    justifyContent: "center",
    transition: "background ease 0.3s",
    backgroundColor: theme.colors.stoneTints[8],
    "&:nth-last-child(1)": {
      backgroundColor: theme.colors.concreteTints[8],
    },
    "&:nth-last-child(2)": {
      backgroundColor: "white",
    },
  })
);

const TileInner = styled("div")(
  css({
    [theme.mediaQueries.medium]: {
      position: "absolute",
      flexDirection: "column",

      justifyContent: "center",
      top: 0,
      bottom: 0,
      my: "auto",
    },
    columnGap: 18,
    alignItems: "center",
    display: "flex",
  })
);

const Icon = styled("div")(
  css({
    width: 48,
    height: 48,
    [theme.mediaQueries.medium]: {
      mb: 72,
    },
  })
);

export { Container, Wrapper, TileWrapper, Tile, TileInner, Icon };
