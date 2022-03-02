import React from "react";
import Text from "@components/common/typography";
import { LeftCol, RightCol } from "./styles";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const TwoColsTextBlock = ({ component, backgroundColor, pt = 60, pb = 60 }) => {
  const cssProps: any = {
    bg: backgroundColor ? backgroundColor : "#FFFFF8",
    pt,
    pb,
  };
  return (
    <Container css={css(cssProps)}>
      {component?.headline && (
        <LeftCol>
          <Text
            className="textHeroBlock"
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
            css={css({ p: { pb: 0, a: { position: 'relative', display: 'inline-block', color: 'inherit', textDecoration: 'none',       "&:before": {
              position: "relative",
              backgroundColor: "charcoal",
              content: "' '",
              display: "block",
              height: "2px",
              width: "auto",
              transform: "translateY(28px)",
              transition: "ease all 0.3s",
              pointerEvents: "none",
              opacity: 1,
            },
            "&:hover": {
              "&:before": {
                transform: "translateY(26px)",
                opacity: 1,
              },
            },} } })}
          />
        </RightCol>
      )}
    </Container>
  );
};
export default TwoColsTextBlock;
