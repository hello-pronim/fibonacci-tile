import { css } from "@emotion/react";
import {
  Container,
  HeroTextWrapper,
  PrimaryText,
  SecondaryText,
} from "./styles";

const Hero = ({ pageTitle }) => {
  return (
    <Container
      css={css({ backgroundImage: "url(/assets/temp/support-hero.jpg)" })}
    >
      <HeroTextWrapper>
        <PrimaryText
          variant="Display-Large"
          altFont
          css={css({ color: "white" })}
        >
          {pageTitle}
        </PrimaryText>
        <SecondaryText
          variant="Display-Overline"
          css={css({ textTransform: "uppercase", color: "white" })}
        >
          How can we help?
        </SecondaryText>
      </HeroTextWrapper>
    </Container>
  );
};

export default Hero;
