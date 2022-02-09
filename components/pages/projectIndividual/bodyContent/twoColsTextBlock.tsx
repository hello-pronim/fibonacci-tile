import React from "react";
import Text from "@components/common/typography";
import { LeftCol, RightCol } from "./styles";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const TwoColsTextBlock = ({
  component,
  backgroundColor,
  hasPadding = false,
  hasBottomPadding = false,
}) => {
  const cssProps: any = {
    bg: backgroundColor ? backgroundColor : "#FFFFF8",
  };
  if (hasPadding) {
    cssProps.py = 120;
  }
  if (hasBottomPadding) {
    cssProps.pb = 120;
  }
  return (
    <Container css={css(cssProps)}>
      {component?.headline && (
        <LeftCol>
          <Text
            variant="Display-Medium"
            altFont
            dangerouslySetInnerHTML={{ __html: component.headline }}
          />
        </LeftCol>
      )}
      {component?.text && (
        <RightCol>
          <Text
            variant="Body-Regular"
            dangerouslySetInnerHTML={{ __html: component.text }}
            css={css({p: {pb: 24,}})}
          />
        </RightCol>
      )}
    </Container>
  );
};
export default TwoColsTextBlock;
