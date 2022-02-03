import css from "@styled-system/css";
import styled from "@emotion/styled";

const CollectionProductsContainer = styled('div')(() =>
  css({
    alignItems: "flex-start",
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

export {
  CollectionProductsContainer,
};
