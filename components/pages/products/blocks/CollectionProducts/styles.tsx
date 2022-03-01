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
    rowGap: 40,
    gridTemplateColumns: [
      "repeat(3, 1fr)",
    ],
    display: "grid",
    [theme.mediaQueries.smedium]: {
      pt: 164,
      pb: 140,
      pl: "40%",
    },
  })
);

const CaptionText = styled("div")(() =>
  css({
    position: "absolute",
    top: "190px",
    left: "220px",
    textAlign: "left",
    maxWidth: 350,
  })
);

export {
  CollectionProductsContainer,
  CaptionText
};
