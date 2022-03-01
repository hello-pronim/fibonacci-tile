import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const CollectionProductsContainer = styled('div')(() =>
  css({
    alignItems: "flex-start",
    position: "relative",
    pt: 55,
    pb: 55,
    pl: 15,
    pr: 15,
    rowGap: 40,
    gridTemplateColumns: [
      "repeat(1, 1fr)",
    ],
    display: "grid",
    [theme.mediaQueries.smedium]: {
      pt: 164,
      pb: 140,
      pl: "40%",
      pr: 0,
      gridTemplateColumns: [
        "repeat(3, 1fr)",
      ],
    },
  })
);

const CaptionText = styled("div")(() =>
  css({
    position: "relative",
    top: "-40px",
    left: "0",
    textAlign: "left",
    maxWidth: 350,
    [theme.mediaQueries.smedium]: {
      position: "absolute",
      top: "190px",
      left: "220px",
    },
  })
);

export {
  CollectionProductsContainer,
  CaptionText,
};
