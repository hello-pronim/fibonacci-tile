import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const SliderWrapper = styled("div")(() =>
  css({
    width: "100%",
    position: "absolute"
  })
);


export {
  SliderWrapper,
};
