import React from "react";
import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Cont from "@components/common/layout/container";
import { justifyContent } from "styled-system";

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
const SingleCategory = styled("span")(
  css({
    position: "relative",
    display: "inline-block",
    textTransform: "uppercase",
    fontSize: "12px",
    lineHeight: "115%",
    padding: "8px 16px",
    borderWidth: "1px",
    borderColor: "#d4d4d8",
    borderStyle: "solid",
    borderRadius: "32px",
    cursor: "pointer",
    color: "#ffffff",
    backgroundColor: "#141414",
  })
);
const Right = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: "auto",
    padding: "10px",
    gridColumnGap: "10px",
    gridRowGap: "11px",
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

const Categories = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: "auto auto",
    padding: "10px",
    gridColumnGap: "10px",
    gridRowGap: "11px",
  })
);
const Date = styled("span")(
  css({
    ml: "13px",
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
      pt: "44px",
      pb: "138",
    },
    [theme.mediaQueriesMaxWidth.xSmall]: {
      padding: "0 14px",
      pt: "44px",
      pb: "138",
    },

    padding: "0 56px",
    pt: "64px",
    maxWidth: "2560px",
    mr: "auto",
    ml: "auto",
  })
);

export { Left, Right, Row, SingleCategory, Categories, Date };
