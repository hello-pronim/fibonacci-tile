import { css } from "@emotion/react";
import Text from "@components/common/typography";
import { Container } from "./styles";

const Hero = ({ pageTitle }) => {
  return (
    <Container
      css={css({ backgroundImage: "url(/assets/temp/support-hero.jpg)" })}
    >
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 32,
          paddingTop: 120,
          paddingBottom: 120,
        })}
      >
        <Text variant="Display-Large" altFont>
          {pageTitle}
        </Text>
        <Text
          variant="Display-Overline"
          css={css({ textTransform: "uppercase" })}
        >
          How can we help?
        </Text>
      </div>
    </Container>
  );
};

export default Hero;
