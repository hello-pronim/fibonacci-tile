import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Cntnr from "@components/common/layout/container";
import Text from "@components/common/typography";

interface TitleProps {
  active: boolean;
}
const Container = styled(Cntnr)(() =>
  css({
    py: "80px",
    [theme.mediaQueries.small]: {
      py: "120px",
    },
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

const Tile = styled("a")(({ active }: TitleProps) =>
  css({
    position: "relative",
    display: "inline-flex",
    width: "100%",
    textDecoration: "none",
    justifyContent: "center",
    transition: "background ease 0.3s",
    py: 24,
    // backgroundColor: active ? "white" : theme.colors.concreteTints[8],
    backgroundColor: "#ebebeb",
    border: "none",
    borderLeft: active && `2px solid ${theme.colors.charcoal}`,
    [theme.mediaQueries.medium]: {
      width: "25%",
      py: 32,
      border: "none",
      borderBottom: active && `2px solid ${theme.colors.charcoal}`,
    },
    "&:hover": {
      bg: "white",
      border: "none",
      borderLeft: `2px solid ${theme.colors.charcoal}`,
      [theme.mediaQueries.medium]: {
        border: "none",
        borderBottom: `2px solid ${theme.colors.charcoal}`,
      },
    },
  })
);

const TileInner = styled("div")(
  css({
    color: "charcoal",
    columnGap: 18,
    display: "flex",
    alignItems: "center",
    width: "100%",
    px: 24,
    [theme.mediaQueries.medium]: {
      flexDirection: "column",
      justifyContent: "center",
      px: 32,
      my: "auto",
    },
  })
);

const TileText = styled(Text)(
  css({
    flex: "1 auto",
    fontSize: "18px",
    lineHeight: "21.6px",
    textAlign: "center",
    [theme.mediaQueries.medium]: {
      height: "80px",
    },
  })
);

const Icon = styled("div")(
  css({
    width: "80px",
    textAlign: "center",
    // width: 48,
    // height: 48,
    [theme.mediaQueries.medium]: {
      width: "100%",
      height: "126px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export { Container, Wrapper, TileWrapper, Tile, TileInner, TileText, Icon };
