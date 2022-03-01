import { Container, Wrapper, PrimaryText, SecondaryText } from "./styles";

const QuoteModule = ({ children, source }) => {
  return (
    <Container>
      <Wrapper>
        <PrimaryText as="h3" variant="Display-Medium" altFont>
          {children}
        </PrimaryText>
        <SecondaryText as="h5" variant="Body-Regular">
          {source}
        </SecondaryText>
      </Wrapper>
    </Container>
  );
};

export default QuoteModule;
