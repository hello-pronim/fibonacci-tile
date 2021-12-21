import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const LeftCol = styled('div')(css({
    position: 'relative',
    height: '100%',
    gridColumn: '1 / span 2',
    gridRow: 1,
    display: 'flex',
    [theme.mediaQueries.small]: {
        gridColumn: '2 / span 4',
    },
}))

const RightCol = styled('div')(css({
    position: 'relative',
    gridColumn: '1 / span 2',
    display: 'flex',
    flexDirection: 'column',
    gridRow: 2,
    [theme.mediaQueries.small]: {
        gridColumn: '7 / span 5',
        gridRow: 1,
    },
}))

const ImageLeft = styled('div')(css({
    position: 'relative',
    gridColumn: '1 / span 2',
    display: 'flex',
    height: '100%',
    div: {
        width: '100% !important',
    },
    [theme.mediaQueries.small]: {
        gridColumn: '2 / span 5',
        gridRow: 1,
    },
}))

const ImageRight = styled('div')(css({
    position: 'relative',
    gridColumn: '1 / span 2',
    display: 'flex',
    height: '100%',
    div: {
        width: '100% !important',
    },
    [theme.mediaQueries.small]: {
        gridColumn: '7 / span 5',
        gridRow: 1,
    },
}))

const FwWrapper = styled('div')(css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gridColumn: ['1 / span 2', '1 / span 2', '1 / span 6','2 / span 10'],
    width: '100%',
}))

export {LeftCol, RightCol, FwWrapper, ImageLeft, ImageRight}