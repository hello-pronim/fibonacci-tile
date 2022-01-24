import css from "@styled-system/css";
import styled from "@emotion/styled";

const Container = styled("section")(
  css({
    maxWidth: "2560px",
    margin: "0 auto",
  })
);

const HeaderContainer = styled("div")(
  css({
    position: "relative",
  })
);

const SingleProductContainer = styled("div")(
  css({
    clear: "both",
    "&.innerHeader": {
      ".Wrapper": {
        backgroundColor: "black",
      },
    },
  })
);

export { Container, HeaderContainer, SingleProductContainer };
