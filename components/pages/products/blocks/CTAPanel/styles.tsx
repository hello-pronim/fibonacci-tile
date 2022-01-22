import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

interface ImgContainerProps {
  position: string;
}

const CTAContainer = styled("section")(
  css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "80px",
    paddingBottom: "60px",
  })
);

const CTADetails = styled("div")(
  css({
    width: "34%",
    padding: "0px 75px",
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

const ImgContainer = styled("div")(({ position }: ImgContainerProps) =>
  css({
    width: "55%",
    order: position === "left" ? 2 : "unset",
  })
);

export { CTAContainer, CTADetails, ImgContainer };
