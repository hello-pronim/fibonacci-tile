import React from "react";
import Text from "@components/common/typography";
import Image from "next/image";
import heroImage from "public/assets/temp/project-hero.png";
import { LeftCol, RightCol, Pill, ContentWrapper, Container } from "../styles";
import css from "@styled-system/css";
import styles from "./styles.module.scss";
import theme from "@styles/theme";

const Hero = ({ heroDetails: { pageHeading, pageIntro } }) => {
  return (
    <Container
      css={css({
        pt: "40px",
        [theme.mediaQueries.small]: {
          pt: "60px",
        },
      })}
    >
      <LeftCol>
        <ContentWrapper>
          <Text
            className={styles.title}
            Base="h1"
            variant="Display-Large"
            altFont={true}
          >
            {pageHeading}
          </Text>
        </ContentWrapper>
      </LeftCol>
      <RightCol>
        <Text className={styles.bodyText} Base="h4" variant="Display-Medium">
          {pageIntro}
        </Text>
      </RightCol>
    </Container>
  );
};
export default Hero;
