import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';

const LeftCol = styled('div')(css({
    position: 'relative',
    height: '100%',
    gridColumn: '2 / span 5',
    display: 'flex',
    pt: 56,
}))

const RightCol = styled('div')(css({
    gridColumn: '7 / span 9',
    display: 'grid',
    columnGap: '62px',
    rowGap: '40px',
}))

const FwWrapper = styled('div')(css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '2 / span 10',
    width: '100%',
}))

export {LeftCol, RightCol, FwWrapper}