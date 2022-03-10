import React from "react";
import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const ModuleWrapper = styled("div")(
  css({
    "& > *": {
      pb: 120,
    },
  })
);

const SocialWrapper = styled("div")(
  css({
    height: "fit-content",
    zIndex: 9999,
    alignSelf: "flex-start",
    gridColumn: "1 / span 1",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: 17,
      lineHeight: "140%",
      textDecoration: "none",
      color: "charcoal",
    },
  })
);

const RightCol = styled("div")(
  css({
    position: "relative",
    gridColumn: "4 / span 6",
    display: "flex",
    flexDirection: "column",
    h2: {
      pt: "80px",
    },
    h3: {
      pt: "40px",
    },
    h5: {
      pt: "24px",
    },

    [theme.mediaQueriesMaxWidth.small]: {
      gridColumn: "2/ span 9",
    },
    [theme.mediaQueriesMaxWidth.xSmall]: {
      gridColumn: "1 / span 2",
    },
  })
);

const ImageLeft = styled("div")(
  css({
    position: "relative",
    gridColumn: "2 / span 5",
    display: "flex",
    height: "100%",
    div: {
      width: "100% !important",
    },
  })
);

const ImageRight = styled("div")(
  css({
    position: "relative",
    gridColumn: "7 / span 5",
    display: "flex",
    height: "100%",
    div: {
      width: "100% !important",
    },
    [theme.mediaQueriesMaxWidth.xSmall]: {
      gridColumn: "1 / span 2",
      paddingTop: "20px",
    },
  })
);

const FwWrapper = styled("div")(
  css({
    position: "relative",
    // pt: "200px",
    mr: "auto",
    ml: "auto",
    maxWidth: "2560px",
  })
);
const TextCol = styled("div")(
  css({
    position: "relative",
    gridColumn: "5 / span 6",
    display: "flex",
    flexDirection: "column",
  })
);
const Ul = styled("div")(
  css({
    pt: "32px",
  })
);
const Ol = styled("div")(
  css({
    pt: "32px",
    listStyleType: "number",
  })
);
const Wrapper = styled("div")(
  css({
    gridColumn: "2 / span 10",
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    ml: "auto",
    mr: "auto",
  })
);

const SocialItem = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: "7.2px",
    mt: 12.5,
    paddingRight: 14,
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

        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
    },
  })
);
const Row = styled("div")(
  css({
    [theme.mediaQueriesMaxWidth.small]: {
      display: "none",
    },
    [theme.mediaQueriesMaxWidth.medium]: {
      padding: "0 140px",
      pt: "180px",
      pb: "28px",
    },
    padding: "0 230px",
    pb: "302px",
  })
);

export {
  RightCol,
  FwWrapper,
  ImageLeft,
  ImageRight,
  TextCol,
  Ul,
  Ol,
  Wrapper,
  SocialWrapper,
  SocialItem,
  Row,
  ModuleWrapper,
};
