import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const LeftCol = styled('div')(css({
    gridColumn: '1 / span 2',
    position: 'relative',
    height: '100%',
    display: 'flex',
    pt: 56,
    [theme.mediaQueries.medium]: {
        pr: "0px",
        gridColumn: '2 / span 3',
    },
}))

const RightCol = styled('div')(css({
    gridColumn: '1 / span 2',
    gridTemplateColumns: '1fr 1fr',
    [theme.mediaQueries.small]: {
        gridColumn: '7 / span 5',
    },
}))

const ProductGrid = styled('div')(css({
    gridColumn: '1 / span 2',
    display: 'none',
    [theme.mediaQueries.small]: {
        display: 'grid',
        gridColumn: '7 / span 5',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '62px',
        rowGap: '40px',
    },
}))


const SliderWrapper = styled('div')(css({
    display: 'block',
    '.slick-list': {
        paddingLeft: '0 !important',
    },
    [theme.mediaQueries.small]: {
        display: 'none',
    },
}))

export {LeftCol, RightCol, ProductGrid, SliderWrapper}