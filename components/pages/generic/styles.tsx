import css from "@styled-system/css";
import styled from "@emotion/styled";
import Text from "@components/common/typography";
import theme from "styles/theme";

export interface containerProps {
  mode?: string;
  visibleArrow: boolean;
  visibleBorder: boolean;
  fullWidth: boolean;
  size: string;
  bgColor: string;
  disabled: boolean;
}

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
    pt: "160px",
    pb: "48px",
    pl: "20px",
    pr: "20px",
    [theme.mediaQueries.small]: {
      pt: "190px !important",
      pr: [
        "16px !important",
        "16px !important",
        "30px !important",
        "40px !important",
        "80px !important",
      ],
      pl: [
        "16px !important",
        "16px !important",
        "30px !important",
        "40px !important",
        "80px !important",
      ],
    },
    "& .titleContentBlock": {
      display: "block",
      marginBottom: "40px",
    },
    "& .detailsContentBlock": {
      display: "flex",
      justifyContent: "flex-start",
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
          maxWidth: "1010px",
          marginLeft: "35%",
        },
        [theme.mediaQueries.mLarge]: {
          marginLeft: "31%",
        },
        [theme.mediaQueries.xLarge]: {
          marginLeft: "27%",
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
    display: "block",
    marginBottom: "40px",
    [theme.mediaQueries.medium]: {
      fontSize: "48px",
    },
    [theme.mediaQueries.xMedium]: {
      fontSize: "74px",
    },
  })
);

const PageNotFoundBlock = styled("div")(
  css({
    maxWidth: "800px",
    marginBottom: "0px",
    [theme.mediaQueries.sSmall]: {
      marginBottom: "20px",
    },
    "& p": {
      fontSize: "16px",
      lineHeight: "140%",
      color: "#141414",
      marginBottom: "20px",
    },
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    svg: {
      transition: "ease all 0.3s",
    },
    "&:hover": {
      svg: {
        transform: "translateX(6px)",
      },
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "charcoal",
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
  })
);

export { Container, HeaderContainer, InnerContainer, PageTitle, PageNotFoundBlock, LinkWrapper };
