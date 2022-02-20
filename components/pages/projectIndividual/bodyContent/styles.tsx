import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';

const LeftCol = styled('div')(css({
    position: 'relative',
    height: '100%',
    gridColumn: '2 / span 4',
    display: 'flex',
}))

const RightCol = styled('div')(css({
    position: 'relative',
    gridColumn: '7 / span 5',
    display: 'flex',
    flexDirection: 'column',
    "& p": {
        fontSize: "20px",
        lineHeight: "140%",
    },
}))

const ImageLeft = styled('div')(css({
    position: 'relative',
    gridColumn: '2 / span 5',
    display: 'flex',
    height: '100%',
    div: {
        width: '100% !important',
    },
}))

const ImageRight = styled('div')(css({
    position: 'relative',
    gridColumn: '7 / span 5',
    display: 'flex',
    height: '100%',
    div: {
        width: '100% !important',
    },
}))

const FwWrapper = styled('div')(css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '2 / span 10',
    width: '100%',
}))

export {LeftCol, RightCol, FwWrapper, ImageLeft, ImageRight}