import css from "@styled-system/css";
import styled from "@emotion/styled";

const CollectionProductsContainer = styled('div')(() =>
  css({
    alignItems: "flex-start",
    position: "relative",
    pt: 164,
    pb: 140,
    pl: "40%",
    rowGap: 40,
    gridTemplateColumns: [
      "repeat(3, 1fr)",
    ],
    display: "grid"
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
