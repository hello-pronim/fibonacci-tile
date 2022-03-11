import React, { useState, useRef } from "react";
import { css } from "@styled-system/css";
import Text from "@components/common/typography";
import Arrow from "@components/icons/arrowDown";
import { Item, Top, Inner, Toggle } from "./styles";
import theme from "styles/theme";
import richTextRenderer from "@utils/richTextRenderer";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const myRef = useRef({});
  const executeScroll = (value: any) => {
    setTimeout(() => {
      const element = myRef.current[value];
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 100;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
      // myRef.current[value].scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      //   inline: "nearest",
      // });
    }, 10);
  };
  return (
    <>
      {items.map((item: any, index: number) => {
        return (
          <Item
            ref={(el) => {
              if (el) {
                myRef.current[`accordion-${index}`] = el;
              } else {
                delete myRef.current[`accordion-${index}`];
              }
            }}
            key={`accordion-${index}`}
          >
            <Top
              onClick={() => {
                executeScroll(`accordion-${index}`);
                setActiveIndex(activeIndex === index ? null : index);
              }}
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
                onClick={() => {
                  executeScroll(`accordion-${index}`);
                  setActiveIndex(activeIndex === index ? null : index);
                }}
              >
                <Arrow width={18} />
              </Toggle>
            </Top>
            {index === activeIndex && (
              <Inner variant="Body-Large">
                {richTextRenderer(item.content)}
              </Inner>
            )}
          </Item>
        );
      })}
    </>
  );
};

export default Accordion;
