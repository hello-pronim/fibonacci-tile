import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const CollectionProjectsContainer = styled('div')(() =>
  css({
    pt: 55,
    pb: 60,
    pl: 15,
    pr: 15,
    position: "relative",
    [theme.mediaQueries.medium]: {
      pt: 120,
      pb: 120,
      pl: 100,
      pr: 100,
    },
    [theme.mediaQueries.xxMedium]: {
      pl: 230,
      pr: 230,
    },
  })
);

const Bottom = styled('div')(() =>
  css({
    gridRow: 4,
    gridColumn: '1 / span 2',
    width: '100%',
    display: 'block',
    marginTop: '20px',
    [theme.mediaQueries.small]: {
      display: 'flex',
      gridRow: 3,
      gridColumn: '9 / span 3',
      justifyContent: 'flex-end',
      marginTop: '40px',
    },
  })
);

export { CollectionProjectsContainer, Bottom };
