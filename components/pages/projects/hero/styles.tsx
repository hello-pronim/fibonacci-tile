import React from "react";
import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Cont from "@components/common/layout/container";

const Container = styled(Cont)(
  css({
    alignItems: "flex-start",
    px: "0px !important",
    [theme.mediaQueries.small]: {
      pr: "0px",
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
    gridRow: 2,
    px: 16,
    position: "relative",
    height: "100%",
    gridColumn: "1 / span 2",
    display: "flex",
    flexDirection: "column",
    // rowGap: 160,
    pt: "8px",
    pb: 104,
    [theme.mediaQueries.small]: {
      px: 0,
      gridColumn: "1 / span 5",
      gridRow: 1,
    },
  })
);

const RightCol = styled("div")(
  css({
    gridColumn: "1 / span 2",
    gridRow: 1,
    height: "100%",
    div: {
      height: "inherit",
    },
    [theme.mediaQueries.small]: {
      gridRow: 1,
      gridColumn: "7 / span 12",
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
    mt: 80,
    [theme.mediaQueries.small]: {
      mt: 53,
    },
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
export {
  LeftCol,
  RightCol,
  Pill,
  ContentWrapper,
  DetailsWrapper,
  Detail,
  Container,
};
