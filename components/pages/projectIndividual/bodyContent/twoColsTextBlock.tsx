import React from "react";
import Text from "@components/common/typography";
import {  LeftCol, RightCol } from "./styles";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const TwoColsTextBlock = ({ component, backgroundColor }) => {
  return (
    <Container css={css({ bg: backgroundColor ? backgroundColor : "#FFFFF8" })}>
        {component?.headline && 
        <LeftCol>
          <Text variant="Display-Medium" altFont dangerouslySetInnerHTML={{__html: component.headline}} />
        </LeftCol>
        }
        {component?.text && 
        <RightCol>
          <Text variant="Body-Regular" dangerouslySetInnerHTML={{__html: component.text}} />
        </RightCol>
        }
    </Container>
  );
};
export default TwoColsTextBlock;
