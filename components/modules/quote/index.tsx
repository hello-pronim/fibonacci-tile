import {
    Container,
    Wrapper,
  } from "./styles";
import Text from "@componentscommon/typography";
  
const QuoteModule = ({children, source}) => {
    return (
      <Container>
        <Wrapper>
            <Text Base="h3" variant="Display-Medium" altFont>
                {children}
            </Text>
            <Text Base="h5" variant="Body-Regular">
                {source}
            </Text>
        </Wrapper>
      </Container>
    );
  }

export default QuoteModule;
  