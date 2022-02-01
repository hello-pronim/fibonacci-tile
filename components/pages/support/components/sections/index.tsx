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

interface accordionTypes {
  accentText?: string;
}

const ProjectsModule = ({ accentText }: accordionTypes) => {
  return (
    <Container id="projects">
      {accentText && <AccentText top={400}>{accentText}</AccentText>}
      <IntroWrapper>
        <Text
          variant="Display-Medium"
          altFont
          css={css({
            fontSize: 24,
            [theme.mediaQueries.small]: {
              fontSize: 42,
            },
          })}
        >
          Completely homogenous, Fibonacci Tiles <br/> and Slabs have a high density
          and are <br/> exceptionally strong and hard wearing.
        </Text>
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

export default ProjectsModule;
