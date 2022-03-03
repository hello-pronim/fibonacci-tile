import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const CustomSolutionsCTAContainer = styled("section")(
  css({
    marginTop: "20px",
    display: "flex",
    alignItems: "stretch",
    flexDirection: 'column',
    [theme.mediaQueries.xSmall]: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
  })
);

const CTAImgBox = styled("div")(
  css({
    width: '100%',
    [theme.mediaQueries.xSmall]: {
      width: "35%",
    },
    "@media screen and (min-width: 800px)": {
      width: '50%',
    },
    div: {
      display: "block",
      width: "100%",
      height: "100%",
    },
  })
);

const CTADetails = styled("div")(
  ({ backgroundColor }: { backgroundColor?: string }) =>
    css({
      width: '100%',
      [theme.mediaQueries.xSmall]: {
        width: "65%",
      },
      "@media screen and (min-width: 800px)": {
        width: '50%',
      },
      backgroundColor: backgroundColor
        ? backgroundColor
        : theme.colors.greys[1],
    })
);

const CTADetailsBox = styled("div")(
  css({
    padding: "30px 55px 55px 55px",
    maxWidth: "400px",
    h2: {
      [theme.mediaQueries.smedium]: {
        fontSize: "44px",
      },
      fontSize: 32,
      lineHeight: "51px",
      letterSpacing: "0.01em",
      marginBottom: "25px",
    },
    h3: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    p: {
      fontSize: "16px",
      lineHeight: "22.4px",
      marginBottom: "60px",
    },
    "p:first-of-type + p": {
      paddingTop: "20px",
    },
  })
);

export { CustomSolutionsCTAContainer, CTAImgBox, CTADetails, CTADetailsBox };
