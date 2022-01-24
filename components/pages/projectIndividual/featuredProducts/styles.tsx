import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';

const LeftCol = styled('div')(css({
    position: 'relative',
    height: '100%',
    gridColumn: '2 / span 3',
    display: 'flex',
    pt: 56,
}))

const RightCol = styled('div')(css({
    gridColumn: '7 / span 5',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '62px',
    rowGap: '40px',
}))

export {LeftCol, RightCol}