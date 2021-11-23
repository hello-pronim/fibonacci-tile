import css from "@styled-system/css";
import styled from "@emotion/styled";

const Wrapper = styled("a")(
  css({
    display: "flex",
    textDecoration: "none",
    fontSize: 2,
    lineHeight: 2,
    color: "charcoal",
    px: 24,
    py: 13,
    border: "1px solid",
    borderColor: "concrete",
    mr: "auto",
    columnGap: [20, 20, 20, 20, 20, 80],
    alignItems: "center",
  })
);

const Label = styled("span")(css({}));

export { Wrapper, Label };
