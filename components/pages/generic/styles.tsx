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
    "& .titleContentBlock": {
      display: "block",
      marginBottom: "40px",
    },
    "& .detailsContentBlock": {
      display: "flex",
      justifyContent: "flex-end",
      "& p": {
        fontSize: "20px",
        lineHeight: "140%",
        color: "#141414",
        marginBottom: "20px",
        "& strong": {
          fontWeight: "500",
        },
      },
      "& ul": {
        listStyleType: "disc",
        marginBottom: "20px",
        paddingLeft: "30px",
        "& li": {
          fontSize: "20px",
          lineHeight: "140%",
          color: "#141414",
          marginBottom: "5px",
        },
      },
      "& div": {
        maxWidth: "100%",
        [theme.mediaQueries.xxMedium]: {
          maxWidth: "65%",
        },
        [theme.mediaQueries.mLarge]: {
          maxWidth: "70%",
        },
        [theme.mediaQueries.xLarge]: {
          maxWidth: "73%",
        },
      },
    },
  })
);

const PageTitle = styled(Text)(
  css({
    fontFamily: "Canela",
    fontSize: "42px",
    lineHeight: "110%",
    [theme.mediaQueries.small]: {
      fontSize: "74px",
    },
  })
);

export { Container, HeaderContainer, InnerContainer, PageTitle };
