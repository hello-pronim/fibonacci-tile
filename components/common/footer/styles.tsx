import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Container = styled("div")(({ ...props }) =>
  css({
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "charcoal",
  })
);

const FooterWrapper = styled("div")(({ ...props }) =>
  css({
    boxSizing: "border-box",
    mx: "auto",
    maxWidth: 2560,
    width: "100%",

    backgroundColor: "charcoal",
    color: "#fff",
    display: "grid",
    columnGap: [30, 30, 30, 30, 30, 100],
    rowGap: 64,
    py: 64,
    px: 24,
    [theme.mediaQueries.small]: {
      gridTemplateColumns: "64px 1fr 1fr 1fr 64px",
      gridTemplateRows: "auto",
    },
  })
);

const RotatedLogo = styled("div")(() =>
  css({
    display: "none",
    [theme.mediaQueries.small]: {
      display: "block",
      gridColumn: 1,
      gridRow: "1 / span 2",
    },
  })
);

const MobileLogo = styled("div")(() =>
  css({
    display: "block",
    gridRow: 1,
    [theme.mediaQueries.small]: {
      display: "none",
    },
  })
);

const SubFooterWrapper = styled("div")(({ ...props }) =>
  css({
    mx: "auto",
    maxWidth: 2560,
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    flexDirection: ["column", "column", "row"],
    rowGap: 16,
    backgroundColor: theme.colors.greys[0],
    justifyContent: "space-between",
    alignItems: ["flex-start", "flex-start", "center"],
    color: "#fff",
    padding: "21px 65px 21px 16px",
  })
);

const SubFooterItems = styled("div")(({mobileOrder}: {mobileOrder: number}) =>
  css({
    fontSize: 1,
    lineHeight: 0,
    fontFamily: 1,
    color: theme.colors.stoneTints[4],
    a: { color: "stone", textDecoration: "none" },
    order: mobileOrder && mobileOrder,
    [theme.mediaQueries.small]: {
      order: 'initial'
    },
  })
);
const Column = styled("div")(() =>
  css({
    display: "flex",
    flexDirection: "column",
    rowGap: 80,
  })
);

const Segment = styled("div")(({ col, row, mobileRow }: { col: number; row: number; mobileRow: number; }) =>
  css({
    gridRow: mobileRow && mobileRow,
    [theme.mediaQueries.small]: {
      gridColumn: col && col,
      gridRow: row && row,
    },
  })
);

const SegmentTitle = styled("h4")(() =>
  css({
    fontFamily: 1,
    fontSize: 2,
    lineHeight: 4,
    fontWeight: 0,
    paddingBottom: 16,
    color: "concrete",
  })
);

const ItemList = styled("ul")(() => ({}));

const Item = styled("li")(() =>
  css({
    fontFamily: 1,
    fontSize: 2,
    lineHeight: 4,
    fontWeight: 0,
    color: "white",
    "&:not(:last-child)": {
      paddingBottom: 16,
    },
    a: { color: "inherit", textDecoration: "none" },
  })
);

const TextSegment = styled("p")(() =>
  css({
    fontFamily: 1,
    fontSize: 2,
    lineHeight: 4,
    fontWeight: 0,
    color: "white",
    span: {
      color: "concrete",
    },
  })
);

const FooterFlavourText = styled("div")(() =>
  css({
    display: "none",
    writingMode: "vertical-lr",
    justifyContent: "space-between",
    transform: "rotate(180deg)",
    color: "concrete",
    textTransform: "uppercase",
    fontSize: 3,
    fontWeight: 1,
    letterSpacing: 3,
    [theme.mediaQueries.small]: {
      display: "flex",
      gridColumn: 5,
      gridRow: "1 / span 2",
    },
  })
);

const Signup = styled("form")(() =>
  css({
    paddingTop: 16,
    input: {
      border: "none",
      width: "100%",
      px: "16px",
      py: "10px",
      color: "white",
      mb: "8px",
      fontFamily: 1,
      fontSize: 2,
      lineHeight: "125%",
      fontWeight: 0,
      "&::placeholder": {
        color: "white",
      },
      bg: theme.colors.greys[2],
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      textAlign: "left",
      border: "1px solid white",
      color: "white",
      backgroundColor: "transparent",
      fontFamily: 1,
      fontSize: 2,
      lineHeight: '125%',
      fontWeight: 0,
      px: 16,
      py: '9px',
      
    },
  })
);

const Symbol = styled("div")(
  css({
    position: "absolute",
    display: "flex",
    flex: 0,
    right: 16,
  })
);

export {
  Container,
  FooterWrapper,
  SubFooterWrapper,
  RotatedLogo,
  FooterFlavourText,
  Column,
  Segment,
  SegmentTitle,
  ItemList,
  Item,
  TextSegment,
  Signup,
  SubFooterItems,
  Symbol,
  MobileLogo,
};
