import React from "react";
import Text from "@components/common/typography";
import Image from "next/image";
import heroImage from "public/assets/temp/project-hero.png";
import { LeftCol, RightCol, Pill, ContentWrapper, Container } from "../styles";
import css from "@styled-system/css";
import styles from "./styles.module.scss";
import theme from "@styles/theme";

const Hero = () => {
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
            Latest News
          </Text>
        </ContentWrapper>
      </LeftCol>
      <RightCol>
        <Text className={styles.bodyText} Base="h4" variant="Display-Medium">
          Elementum phasellus ligula adipiscing eu sed. Id id ut volutpat tempus
          viverra vestibulum risus pulvinar mollis. Etiam id congue
        </Text>
      </RightCol>
    </Container>
  );
};
export default Hero;
