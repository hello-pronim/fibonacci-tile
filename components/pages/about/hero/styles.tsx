import React from "react";
import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Cont from "@components/common/layout/container";
import Text from "@components/common/typography";

const HeroWrapper = styled("section")(
  css({
    width: "100%",
  })
);

const Container = styled(Cont)(
  css({
    alignItems: "flex-start",
    pt: "28px",
    pb: "80px",
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

const LeftCol = styled("div")(
  css({
    gridRow: 1,
    position: "relative",
    height: "100%",
    gridColumn: "1 / span 2",
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
      gridColumn: "7 / span 3",
    },
  })
);

const Pill = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
    py: "3.5px",
    pl: "6px",
    pr: "12px",
    bg: "charcoal",
    width: "fit-content",
    textTransform: "uppercase",
    color: "white",
    borderRadius: 32,
    fontSize: 0,
    lineHeight: "2px",
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

const HeroTitle = styled(Text)(
  css({
    fontFamily: "Canela",
    fontSize: "42px",
    lineHeight: "54.6px",
    [theme.mediaQueries.small]: {
      fontSize: "74px",
      lineHeight: "81.4px",
    },
  })
);

const HeroBodyText = styled(Text)(
  css({
    display: "block",
    width: "80%",
    fontSize: "32px",
    lineHeight: "41.6px",
    [theme.mediaQueries.small]: {
      width: "100%",
      fontSize: "44px",
      lineHeight: "50.6px",
    },
  })
);

const HeroImageContainer = styled("div")(
  css({
    width: "100%",
    "& > div": {
      position: "unset!important",
      [theme.mediaQueries.small]: {
        position: "relative!important",
      },
      "& >div": {
        display: "none!important",
        [theme.mediaQueries.small]: {
          display: "block!important",
        },
      },
    },
    ".image": {
      objectFit: "cover!important",
      width: "100%!important",
      position: "relative!important",
      height: "400px!important",
      [theme.mediaQueries.small]: {
        height: "0px!important",
        position: "absolute!important",
      },
    },
  })
);

export {
  LeftCol,
  RightCol,
  Pill,
  ContentWrapper,
  DetailsWrapper,
  Detail,
  Container,
  HeroTitle,
  HeroBodyText,
  HeroImageContainer,
  HeroWrapper,
};
