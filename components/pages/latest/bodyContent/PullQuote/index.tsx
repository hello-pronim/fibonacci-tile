import Text from "@components/common/typography";
import { TextCol, Wrapper } from "../styles";

const PullQuote = ({ quote }) => {
  return (
    <Wrapper>
      <TextCol>
        <Text as="h1" variant="Display-Medium" altFont>
          {quote}
        </Text>
      </TextCol>
    </Wrapper>
  );
};

export default PullQuote;
