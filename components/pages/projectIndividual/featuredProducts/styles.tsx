import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';
import theme from "@styles/theme";

const LeftCol = styled('div')(css({
    position: 'relative',
    height: '100%',
    gridColumn: '1 / span 12',
    display: 'flex',
    pt: 56,
    [theme.mediaQueries.smedium]: {
        gridColumn: '2 / span 3',
    },
    "& .textHeroBlock": {
        fontSize: "32px",
        [theme.mediaQueries.smedium]: {
            fontSize: "42px",
        },
    },
}))

const RightCol = styled('div')(css({
    gridColumn: '1 / span 12',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '62px',
    rowGap: '40px',
    [theme.mediaQueries.smedium]: {
        gridColumn: '7 / span 5',
    },
}))

export {LeftCol, RightCol}