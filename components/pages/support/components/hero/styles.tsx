import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Container = styled("div")(() =>
  css({
    color: 'white',
    mx: "auto",
    maxWidth: 2560,
    position: "relative",
    width: "100%",
    pt: 120,
    pb: 153,
  })
);

export {
  Container,
};
