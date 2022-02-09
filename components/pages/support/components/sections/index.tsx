import React from "react";
import AccentText from "@components/common/accentText";
import {
  Container,
  IntroWrapper,
  Sections,
  SectionList,
  SectionItem,
} from "./styles";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";

interface SupportSectionTypes {
  accentText?: string;
  pageHeading?: string;
}

const SupportSections = ({ accentText, pageHeading }: SupportSectionTypes) => {
  return (
    <Container id="projects">
      {accentText && <AccentText top={400}>{accentText}</AccentText>}
      <IntroWrapper>
        {pageHeading && (
          <Text
            variant="Display-Medium"
            altFont
            css={css({
              fontSize: 24,
              [theme.mediaQueries.small]: {
                fontSize: 42,
              },
            })}
            dangerouslySetInnerHTML={{ __html: pageHeading }}
          />
        )}
      </IntroWrapper>
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
    </Container>
  );
};

export default SupportSections;
