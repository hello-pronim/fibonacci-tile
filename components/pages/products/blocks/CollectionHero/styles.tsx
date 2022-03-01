import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const CollectionHeroContainer = styled("div")(() =>
  css({
    pt: 80,
    display: "flex",
    position: "relative",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "column-reverse",
    [theme.mediaQueries.smedium]: {
      flexWrap: "nowrap",
      flexDirection: "unset",
    },
    "& .CollectionBreadCrumbBlock": {
      top: "70px",
      zIndex: "1",
      marginLeft: "15px",
      [theme.mediaQueries.smedium]: {
        top: "80px",
        marginLeft: "30px",
      },
    },
    "& .CollectionTextBlock": {
      width: "auto",
      padding: "80px 15px",
      [theme.mediaQueries.medium]: {
        width: "40%",
        padding: "104px 50px 50px 50px",
      },
      [theme.mediaQueries.xxMedium]: {
        width: "21.6%",
        padding: "104px 80px 50px 80px",
      },
    },
  })
);

const ImageContent = styled("div")(() =>
  css({
    position: "relative",
    width: "100%",
    objectFit: "cover",
    height: "540px",
    div: {
      height: "100%",
    },
    [theme.mediaQueries.medium]: {
      width: "60%",
      height: "auto",
    },
    [theme.mediaQueries.xxMedium]: {
      width: "70%",
    },
  })
);

export { CollectionHeroContainer, ImageContent };
