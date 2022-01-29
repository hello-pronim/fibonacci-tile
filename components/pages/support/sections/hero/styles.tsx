import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Container = styled("section")(
  css({
    mx: "auto",
    maxWidth: 2560,
    position: "relative",
    width: "100%",
  })
);

const HeroImageWrapper = styled("div")(
  css({
    display: "block",
    width: "100%",
  })
);

export { Container, HeroImageWrapper };
