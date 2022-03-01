import React from "react";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import theme from "@styles/theme";
import { LeftCol, RightCol, ContentWrapper, Container } from "../styles";
import styles from "./styles.module.scss";

const Hero = ({ pageData: { pageHeading, pageIntro } }) => {
  return (
    <Container
      css={css({
        pt: "40px",
        rowGap: 56,
        [theme.mediaQueries.small]: {
          pt: "60px",
        },
      })}
    >
      <LeftCol>
        <ContentWrapper>
          <Text
            className={styles.title}
            as="h1"
            variant="Display-Large"
            altFont={true}
          >
            {pageHeading}
          </Text>
        </ContentWrapper>
      </LeftCol>
      <RightCol>
        <Text className={styles.bodyText} as="h4" variant="Display-Medium">
          {pageIntro}
        </Text>
      </RightCol>
    </Container>
  );
};
export default Hero;
