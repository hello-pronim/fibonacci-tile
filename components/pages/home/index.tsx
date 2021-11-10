import React from "react";
import Text from "@components/common/typography";
import css from "@styled-system/css";
import { Container } from "./styles";

const Homepage = () => {
  return (
    <Container grid>
      <div css={css({ gridColumn: "1 / span 10" })}>
        <Text Base="h4" variant="Display-XLarge">
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-Large">
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-Medium">
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-Small">
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-XSmall">
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-XXSmall">
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-Overline">
          Fibonacci
        </Text>
        <br />
        <br />
        <Text Base="h4" variant="Display-Large" altFont>
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-Medium" altFont>
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-Small" altFont>
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-XSmall" altFont>
          Fibonacci
        </Text>
        <Text Base="h4" variant="Display-XXSmall" altFont>
          Fibonacci
        </Text>
        <br />
        <br />
        <Text Base="p" variant="Body-XLarge">
          Fibonacci but make it body
        </Text>
        <Text Base="p" variant="Body-Large">
          Fibonacci but make it body
        </Text>
        <Text Base="p" variant="Body-Regular">
          Fibonacci but make it body
        </Text>
        <Text Base="p" variant="Body-Small">
          Fibonacci but make it body
        </Text>
        <Text Base="p" variant="Body-XSmall">
          Fibonacci but make it body
        </Text>
      </div>
    </Container>
  );
};
export default Homepage;
