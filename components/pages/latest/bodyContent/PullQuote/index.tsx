import Container from "@components/common/layout/container";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";

const PullQuote = ({ content, index }) => {
  const { quote } = content;
  return (
    <Container css={css({ bg: "#fffff8" })}>
      <div css={css({ gridColumn: "2 / span 7" })}>
        <Text as="h2" variant="Display-Medium" altFont>
          {quote}
        </Text>
      </div>
    </Container>
  );
};

export default PullQuote;
