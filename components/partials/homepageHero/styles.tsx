import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";


const Wrapper = styled("div")(() =>
  css({
    width: "100%",
    maxWidth: 2560,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 32,
    height: 80,
  })
);


export {
  Wrapper
};
