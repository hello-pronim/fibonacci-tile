import css from '@styled-system/css';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const CollectionProjectsContainer = styled('div')(() =>
  css({
    pt: 120,
    pb: 120,
    pl: 230,
    pr: 230,
    position: 'relative',
  })
);

const Bottom = styled('div')(() =>
  css({
    gridRow: 4,
    gridColumn: '1 / span 2',
    width: '100%',
    display: 'flex',
    marginTop: '10px',
    [theme.mediaQueries.small]: {
      gridRow: 3,
      gridColumn: '9 / span 3',
      justifyContent: 'flex-end',
    },
  })
);

export { CollectionProjectsContainer, Bottom };
