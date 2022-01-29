import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

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

const HeroOverlayWrapper = styled("div")(
  css({
    marginTop: "-320px",
  })
);

const FormContainer = styled("div")(
  css({
    position: "relative",
    width: "100%",
  })
);

export { Container, HeaderContainer, HeroOverlayWrapper, FormContainer };
