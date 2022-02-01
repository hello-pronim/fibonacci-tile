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
import Accordion from "@components/modules/accordion/accordion";

interface accordionTypes {
  accentText?: string;
}

const AccordionSection = ({ accentText }: accordionTypes) => {
  return (
    <Container>
      <AccentText top={400}>{accentText}</AccentText>
      <Sections>
        <Text variant="Display-Overline">SECTIONS</Text>
        <SectionList>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#projects"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Product Guide
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#gallery"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Installation Guides
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#technical-specifications"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                - Fibonacci Tiles
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#related-products"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                - Fibonacci Slabs
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#gallery"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                Care and Maintenance
              </a>
            </Text>
          </SectionItem>
          <SectionItem>
            <Text variant="Body-Regular">
              <a
                href="#gallery"
                css={css({ color: "inherit", textDecoration: "none" })}
              >
                FAQs
              </a>
            </Text>
          </SectionItem>
        </SectionList>
      </Sections>
      <IntroWrapper>
        <Accordion/>
      </IntroWrapper>
    </Container>
  );
};

export default AccordionSection;
