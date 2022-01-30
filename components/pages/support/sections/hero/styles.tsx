import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Container = styled("section")(
  css({
    mx: "auto",
    maxWidth: 2560,
    position: "relative",
    width: "100%",
  })
);

const HeroImageWrapper = styled("div")(
  css({
    display: "block",
    width: "100%",
  })
);

const HeroTextContainer = styled("div")(
  css({
    position: "absolute",
  })
);

const HeroTextWrapper = styled("div")(
  css({
    display: "block",
    textAlign: "center",
    [theme.mediaQueries.small]: {
      display: "none",
    },
  })
);

const HeroPrimaryText = styled("h2")(
  css({
    fontFamily: "Canela",
    fontSize: "32px",
    lineHeight: "43.2px",
    color: theme.colors.white,
  })
);

const HeroSecondaryText = styled("p")(
  css({
    fontFamily: "Everett",
    fontSize: "12px",
    lineHeight: "16.8px",
    color: theme.colors.white,
  })
);

export {
  Container,
  HeroImageWrapper,
  HeroTextContainer,
  HeroTextWrapper,
  HeroPrimaryText,
  HeroSecondaryText,
};
