import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Cont from "@components/common/layout/container";

const BreadCrumbContainer = styled("div")(
  css({
    alignItems: "flex-start",
    pt: "128px",
    [theme.mediaQueries.small]: {
      pt: "90px!important",
      pr: [
        "16px !important",
        "16px !important",
        "40px !important",
        "56px !important",
        "80px !important",
      ],
      pl: [
        "16px !important",
        "16px !important",
        "40px !important",
        "56px !important",
        "80px !important",
      ],
    },
  })
);

const Container = styled(Cont)(
  css({
    alignItems: "flex-start",
    pt: "128px",
    pb: "48px",
    [theme.mediaQueries.small]: {
      pt: "60px!important",
      pr: [
        "16px !important",
        "16px !important",
        "40px !important",
        "56px !important",
        "80px !important",
      ],
      pl: [
        "16px !important",
        "16px !important",
        "40px !important",
        "56px !important",
        "80px !important",
      ],
    },
  })
);

const ReadMore = styled("div")(
  css({
    [theme.mediaQueriesMaxWidth.xxLarge]: {
      pb: "340px",
    },
    [theme.mediaQueriesMaxWidth.medium]: {
      pb: "170px",
    },
    display: "flex",
    justifyContent: "center",
    pb: "170px",
  })
);

const LeftCol = styled("div")(
  css({
    gridRow: 1,
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // rowGap: 160,
    pt: "8px",
    pb: "56px",
    px: 0,
    [theme.mediaQueries.small]: {
      gridColumn: "1 / span 3",
      gridRow: 1,
    },
  })
);

const RightCol = styled("div")(
  css({
    gridColumn: "1 / span 2",
    gridRow: 2,
    height: "100%",
    div: {
      height: "inherit",
    },
    [theme.mediaQueries.small]: {
      gridRow: 1,
      gridColumn: "7 / span 5",
    },
  })
);

const Pill = styled("div")(
  css({
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    columnGap: "4px",
    py: "14px",
    pl: "16.4px",
    pr: "16.4px",
    bg: "white",
    transition: ".2s all",
    borderWidth: 1,
    borderColor: "#B0ABA7",
    borderStyle: "solid",
    textTransform: "uppercase",
    color: "black",
    width: "fit-content",
    borderRadius: 32,
    fontSize: 0,
    lineHeight: "2px",
    ":not(:first-child)": {
      ml: "10px",
    },

    ":hover": {
      bg: "black",
      color: "white",
      borderWidth: "none",
      borderColor: "black",
    },
  })
);

const ContentWrapper = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    rowGap: 24,
  })
);

const DetailsWrapper = styled("ul")(
  css({
    pt: 120,
    "> *:not(:last-child)": {
      borderBottom: "1px solid",
      borderColor: "warm",
      mb: 16,
      pb: 16,
    },
  })
);

const Detail = styled("li")(
  css({
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
  })
);

const BottomBarInner = styled("div")(
  css({
    // width: "100%",
    display: "flex",
    alignItems: "center",
    pt: 100,
    pl: 19,
  })
);

const CategorysBarInner = styled("div")(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    pt: 24,
  })
);

const AllCategory = styled("div")(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: 125,
    flexWrap: "wrap",
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    mt: 16,
    paddingRight: 14,
    svg: {
      transition: "ease all 0.3s",
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "charcoal",
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
  })
);

const Left = styled("div")(
  css({
    [theme.mediaQueries.small]: {
      width: "60%",
    },
    width: "100%",
    h4: {
      pt: "40px",
    },
  })
);
const Right = styled("div")(
  css({
    [theme.mediaQueriesMaxWidth.xxLarge]: {
      float: "right",
      paddingTop: "78px",
      input: {
        outline: "none",
        border: "none",
        pl: "10px",
        pr: "210px",
        py: "18px",
        color: theme.colors.charcoal,
        mb: "8px",
        fontFamily: 1,
        fontSize: 2,
        lineHeight: "125%",
        fontWeight: 0,
        "&::placeholder": {
          color: theme.colors.charcoal,
        },
        bg: theme.colors.cold,
      },
    },
    [theme.mediaQueriesMaxWidth.small]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%",
      input: {
        pr: "142px",
      },
    },
  })
);
const Row = styled("div")(
  css({
    [theme.mediaQueriesMaxWidth.small]: {
      padding: "0 50px",
      pb: "290px",
    },
    [theme.mediaQueriesMaxWidth.xSmall]: {
      padding: "0 14px",
      pb: "290px",
    },

    padding: "0 230px",
    pb: "302px",
  })
);

const Select = styled("select")(
  css({
    border: "none",
    outline: "none",
    fontSize: "12px",
    fontFamily: "Everett",
    textTransform: "uppercase",
    textAlign: "right",
    background: `url(${"assets/icons/select-icon.svg"}) no-repeat right white`,
    appearance: "none",
    pr: "25px",
    color: "#B0ABA7",
  })
);
const Option = styled("option")(
  css({
    border: "none",
    outline: "none",
    fontSize: "12px",
    fontFamily: "Everett",
    textTransform: "uppercase",
    color: "#141414",
  })
);
const SelectContainer = styled("div")(
  css({
    display: "flex",
    justifyContent: "space-between",
    padding: "80px 16px 20px 16px",
  })
);
const Span = styled("span")(
  css({
    fontSize: "12px",
    fontFamily: "Everett",
    textTransform: "uppercase",
  })
);

export {
  LeftCol,
  RightCol,
  Pill,
  BreadCrumbContainer,
  ContentWrapper,
  DetailsWrapper,
  Detail,
  Container,
  BottomBarInner,
  LinkWrapper,
  AllCategory,
  ReadMore,
  CategorysBarInner,
  Left,
  Right,
  Row,
  Select,
  Option,
  SelectContainer,
  Span,
};
