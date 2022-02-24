import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Text from "@components/common/typography";

interface ImgContainerProps {
  position: string;
}

const CTAContainer = styled("section")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "2560px",
    position: "relative",
    width: "100%",
    gap: "24px",
    [theme.mediaQueries.small]: {
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  })
);

const CTADetails = styled("div")(
  css({
    padding: "0px 16px",
    [theme.mediaQueries.small]: {
      width: "34%",
      padding: "0px 75px",
    },
    h2: {
      fontSize: "44px",
      lineHeight: "1.1",
      letterSpacing: "-0.01em",
      marginBottom: "30px",
    },
    p: {
      fontSize: "16px",
      lineHeight: "1.4",
      fontWeight: "300",
      marginBottom: "15px",
    },
    "p:last-of-type": {
      marginBottom: "30px",
    },
  })
);

const CTAHeaderTextWrapper = styled("div")(
  css({
    marginBottom: "32px",
  })
);

const CTAHeaderText = styled(Text)(
  css({
    fontFamily: "Everett",
    fontSize: "32px",
    lineHeight: "41.6px",
    fontWeight: 400,
    marginBottom: "32px",
    color: theme.colors.charcoal,
    [theme.mediaQueries.small]: {
      fontSize: "44px",
      lineHeight: "50.6px",
    },
  })
);

const CTAIntroWrapper = styled("div")(css({}));

const ImgContainer = styled("div")(({ position }: ImgContainerProps) =>
  css({
    order: 2,
    [theme.mediaQueries.small]: {
      width: "55%",
      order: position === "left" ? 2 : "unset",
    },
  })
);

export {
  CTAContainer,
  CTADetails,
  CTAHeaderText,
  CTAHeaderTextWrapper,
  CTAIntroWrapper,
  ImgContainer,
};
