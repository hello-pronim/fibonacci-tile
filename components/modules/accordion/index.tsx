import React, { useState } from "react";
import { css } from "@styled-system/css";
import Text from "@components/common/typography";
import Arrow from "@components/icons/arrowDown";
import { Item, Top, Inner, Toggle } from "./styles";
import theme from "styles/theme";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {items.map((item: any, index: number) => {
        return (
          <Item key={`accordion-${index}`}>
            <Top
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <Text
                variant="Display-Small"
                css={css({
                  fontSize: 26,
                  [theme.mediaQueries.small]: {
                    fontSize: 32,
                  },
                })}
              >
                {item.title}
              </Text>
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
              <Inner dangerouslySetInnerHTML={{ __html: item.content }} />
            )}
          </Item>
        );
      })}
    </>
  );
};

export default Accordion;
