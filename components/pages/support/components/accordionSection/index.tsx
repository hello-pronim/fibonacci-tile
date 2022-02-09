import React from "react";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import {
  Container,
  IntroWrapper,
  Sections,
  SectionList,
  SectionItem,
} from "./styles";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import Accordion from "@components/modules/accordion";

interface accordionTypes {
  id: string;
  accentText?: string;
  items: Array<any>;
}

const AccordionSection = ({ id = "", accentText, items }: accordionTypes) => {
  return (
    <Container id={id}>
      <AccentText top={400}>{accentText}</AccentText>
      <Sections>
        <Text variant="Display-Overline">SECTIONS</Text>
        <SectionList>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#product-guide"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Product Guide
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#installation-guides"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Installation Guides
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#fibonacci-tiles"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                - Fibonacci Tiles
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#fibonacci-slabs"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                - Fibonacci Slabs
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#care-maintenance"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Care and Maintenance
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#faqs"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                FAQs
              </a>
            </Text>
          </SectionItem>
        </SectionList>
      </Sections>
      <IntroWrapper>
        <Accordion items={items} />
      </IntroWrapper>
    </Container>
  );
};

export default AccordionSection;
