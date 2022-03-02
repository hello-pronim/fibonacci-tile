import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Text from "@components/common/typography";

const Container = styled("div")(() =>
  css({
    color: "white",
    mx: "auto",
    maxWidth: 2560,
    position: "relative",
    width: "100%",
    pt: 80,
    pb: 0,
    [theme.mediaQueries.small]: {
      pt: 120,
      pb: 153,
    },
  })
);

const HeroTextWrapper = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 32,
    paddingTop: 80,
    paddingBottom: 80,
    [theme.mediaQueries.small]: {
      paddingTop: 120,
      paddingBottom: 120,
    },
  })
);

const PrimaryText = styled(Text)(
  css({
    fontSize: "32px",
    lineHeight: "43.2px",
    [theme.mediaQueries.small]: {
      fontSize: "74px",
      lineHeight: "81.4px",
    },
  })
);

const SecondaryText = styled(Text)(
  css({
    fontSize: "12px",
    lineHeight: "16.8px",
  })
);

export { Container, HeroTextWrapper, PrimaryText, SecondaryText };
