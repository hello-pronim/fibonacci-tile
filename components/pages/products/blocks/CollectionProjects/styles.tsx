import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const CollectionProjectsContainer = styled("div")(() =>
  css({
    pt: 55,
    pb: 60,
    pl: 15,
    pr: 15,
    position: "relative",
    [theme.mediaQueries.smedium]: {
      pt: 120,
      pb: 120,
      pl: 230,
      pr: 230,
    },
  })
);


export { CollectionProjectsContainer };
