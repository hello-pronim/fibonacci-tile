import React from "react";
import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const ProductIndividualHeroContainer = styled("div")(() =>
  css({
    "& .CollectionBreadCrumbBlock": {
      paddingLeft: "20px",
      paddingTop: "80px",
      [theme.mediaQueries.smedium]: {
        paddingLeft: "30px",
        paddingTop: "90px",
      },
    },
    "& .projectIndividualContainer": {
      paddingLeft: "0px",
      display: "flex",
      flexDirection: "column-reverse",
      [theme.mediaQueries.smedium]: {
        paddingLeft: "80px",
        display: "grid",
        flexDirection: "unset",
      },
    },
  })
);

const LeftCol = styled("div")(
  css({
    position: "relative",
    height: "100%",
    gridColumn: "1 / span 5",
    display: "flex",
    flexDirection: "column",
    rowGap: 80,
    pt: 100,
    pb: 100,
    pl: 16,
    pr: 16,
    zIndex: 1,
    width: "100%",
    [theme.mediaQueries.smedium]: {
      pt: 110,
      pb: 104,
      pl: 0,
      pr: 0,
      width: "auto",
      rowGap: 160,
    },
    "& .projectContentWrapper": {
      "& h6": {
        color: "#9E9084",
        fontSize: "16px",
        [theme.mediaQueries.smedium]: {
          fontSize: "20px",
        },
      },
      "& h1": {
        fontSize: "44px",
        [theme.mediaQueries.smedium]: {
          fontSize: "80px",
        },
      },
    },
  })
);

const RightCol = styled("div")(({ bgImage }: { bgImage?: string }) =>
  css({
    gridColumn: "1 / span 12",
    // backgroundRepeat: "none",
    // backgroundSize: "cover",
    // backgroundPosition: "center center",
    // backgroundImage: bgImage ? `url(${bgImage})` : "",
    "& div": {
      height: "100%",
      width: "100%",
      [theme.mediaQueries.smedium]: {
        width: "auto",
      },
    },
    "& img": {
      height: "100%",
      objectFit: "cover",
    },
    height: "550px",
    width: "100%",
    [theme.mediaQueries.smedium]: {
      gridColumn: "7 / span 12",
      height: "100%",
      width: "auto",
    },
  })
);

const Pill = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
    py: "3.5px",
    px: "12px",
    bg: "charcoal",
    width: "fit-content",
    zIndex: 99999,
    textTransform: "uppercase",
    color: "white",
    borderRadius: 32,
    fontSize: 0,
    lineHeight: 2,
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

export {ProductIndividualHeroContainer, LeftCol, RightCol, Pill, ContentWrapper, DetailsWrapper, Detail };
