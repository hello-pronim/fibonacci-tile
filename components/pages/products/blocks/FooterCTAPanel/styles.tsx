import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const FooterCTAContainer = styled("section")(
  css({
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "stretch",
  })
);

const CTAImgBox = styled("div")(
  css({
    width: "50%",
    div: {
      display: "block",
      width: "100%",
      height: "100%",
    },
  })
);

const CTADetails = styled("div")(
  css({
    width: "50%",
    backgroundColor: theme.colors.greys[1],
  })
);

const CTADetailsBox = styled("div")(
  css({
    padding: "30px 55px 55px 55px",
    maxWidth: "400px",
    h2: {
      fontSize: "44px",
      lineHeight: "51px",
      letterSpacing: "0.01em",
      marginBottom: "25px",
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

export { FooterCTAContainer, CTAImgBox, CTADetails, CTADetailsBox };
