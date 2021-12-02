import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

export interface containerProps {
  grid?: boolean;
}

const RelatedProductsContainer = styled("section")(() =>
  css({
    width: "100%",
    // maxWidth: 2560,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-between",
    py: 120,
    "@media screen and (max-width: 768px)": {
      py: 60,
    },
  })
);


const Heading = styled("div")(() =>
  css({
   textAlign: "center",
   pb: 80,
   "@media screen and (max-width: 768px)": {
      pb: 40,
    },
  })
);

const Container = styled("div")(({ ...props }: containerProps) =>
  css({
    position: "relative",
    alignItems: "center",
    margin: "0 auto",
    boxSizing: "border-box",
    maxWidth: 2560,
    display: "grid",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(5, 1fr)",
    ],
    columnGap: [16, 16, 16, 16, 24, 48, 40],
    px: [16, 16, 40, 56, 80],
  })
);

export {
    RelatedProductsContainer,
    Heading,
    Container
};
