import css from "@styled-system/css";
import styled from "@emotion/styled";

const CollectionHeroContainer = styled("div")(() =>
  css({
    pt: 80,
    display: "flex",
    position: "relative",
    width: "100%",
  })
);

const ImageContent = styled("div")(() =>
  css({
    position: "relative",
    width: "70%",
    objectFit: "cover",

    div: {
      height: "100%",
    },
  })
);

export { CollectionHeroContainer, ImageContent };
