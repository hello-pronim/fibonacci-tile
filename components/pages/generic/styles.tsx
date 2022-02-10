import css from "@styled-system/css";
import styled from "@emotion/styled";
import Text from "@components/common/typography";
import theme from "styles/theme";

const Container = styled("section")(
  css({
    maxWidth: "2560px",
    margin: "0 auto",
  })
);

const HeaderContainer = styled("div")(
  css({
    position: "relative",
  })
);

const InnerContainer = styled("div")(
  css({
    alignItems: "flex-start",
    pt: "128px",
    pb: "48px",
    [theme.mediaQueries.small]: {
      pt: "160px!important",
      pr: [
        "16px !important",
        "16px !important",
        "40px !important",
        "56px !important",
        "80px !important",
      ],
      pl: [
        "16px !important",
        "16px !important",
        "40px !important",
        "56px !important",
        "80px !important",
      ],
    },
  })
);

const PageTitle = styled(Text)(
  css({
    fontFamily: "Canela",
    fontSize: "42px",
    lineHeight: "54.6px",
    [theme.mediaQueries.small]: {
      fontSize: "74px",
      lineHeight: "81.4px",
    },
  })
);

export { Container, HeaderContainer, InnerContainer, PageTitle };
