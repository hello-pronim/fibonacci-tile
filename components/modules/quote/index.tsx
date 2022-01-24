import { Container, Wrapper } from "./styles";
import Text from "@components/common/typography";

const QuoteModule = ({ children, source }) => {
  return (
    <Container>
      <Wrapper>
        <Text as="h3" variant="Display-Medium" altFont>
          {children}
        </Text>
        <Text as="h5" variant="Body-Regular">
          {source}
        </Text>
      </Wrapper>
    </Container>
  );
};

export default QuoteModule;
