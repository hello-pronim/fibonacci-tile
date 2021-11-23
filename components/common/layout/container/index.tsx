import css from "@styled-system/css";
import styled from "@emotion/styled";

export interface containerProps {
  grid?: boolean;
}

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
      "repeat(6, 1fr)",
      "repeat(12, 1fr)",
    ],
    columnGap: [16, 16, 16, 16, 24, 48, 40],
    px: [16, 16, 40, 56, 80],
  })
);

export default Container;
