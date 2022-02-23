import Container from "@components/common/layout/container";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";

const PullQuote = ({ quote }) => {
  return (
    <Container css={css({pb: 120,})}>
      <div css={css({gridColumn: "2 / span 7",})}>
        <Text as="h1" variant="Display-Medium" altFont>
          {quote}
        </Text>
      </div>
    </Container>
  );
};

export default PullQuote;
