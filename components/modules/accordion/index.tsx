import React, { useState } from "react";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import { Container, Wrapper, Item, Top, Inner, Toggle } from "./styles";
import mockData from "./constants";
import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";
import Arrow from "@components/icons/arrowDown";

interface accordionTypes {
  accentText: string;
}

const AccordionModule = ({ accentText }: accordionTypes) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <AccentText top={154}>{accentText}</AccentText>
      <Wrapper>
        {mockData.map((item, index) => {
          return (
            <Item key={index}>
              <Top>
                <Text variant="Display-Small">{item.heading}</Text>
                <Toggle
                  css={css({
                    svg: {
                      transition: "ease all 0.3s",
                      transform: activeIndex === index && "rotate(180deg)",
                    },
                  })}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <Arrow width={18} />
                </Toggle>
              </Top>
              {index === activeIndex && (
                <Inner>
                  {item.secondaryHeading && (
                    <Text variant="Body-Large" css={css({ mb: 16 })}>
                      <strong>{item.secondaryHeading}</strong>
                    </Text>
                  )}
                  <span>{item.content}</span>
                </Inner>
              )}
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default AccordionModule;
