import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';
import theme from "@styles/theme";


const LeftCol = styled('div')(css({
    position: 'relative',
    height: '100%',
    gridColumn: "1/span 12",
    display: 'flex',
    [theme.mediaQueries.smedium]: {
        gridColumn: '2 / span 4',
    },
    "& .textHeroBlock": {
        fontSize: "24px",
        marginBottom: "60px",
        [theme.mediaQueries.smedium]: {
            marginBottom: "0px",
            fontSize: "42px",
        },
    },
}))

const RightCol = styled('div')(css({
    position: 'relative',
    gridColumn: '1/span 12',
    display: 'flex',
    flexDirection: 'column',
    "& p": {
        fontSize: "20px",
        lineHeight: "140%",
        "&:last-child": {
            marginBottom: "0px",
        },
    },
    [theme.mediaQueries.smedium]: {
        gridColumn: '7 / span 5',
    },
}))

const ImageLeft = styled('div')(css({
    position: 'relative',
    gridColumn: '1/span 12',
    display: 'flex',
    height: '420px',
    marginLeft: "-16px",
    marginRight: "-16px",
    marginBottom: "16px",
    div: {
        width: '100% !important',
    },
    [theme.mediaQueries.smedium]: {
        height: '100%',
        gridColumn: '2 / span 5',
        marginLeft: "0px",
        marginRight: "0px",
        marginBottom: "0px",
    },
}))

const ImageRight = styled('div')(css({
    position: 'relative',
    gridColumn: '1/span 12',
    display: 'flex',
    height: '420px',
    marginLeft: "-16px",
    marginRight: "-16px",
    div: {
        width: '100% !important',
    },
    [theme.mediaQueries.smedium]: {
        gridColumn: '7 / span 5',
        height: '100%',
        marginLeft: "0px",
        marginRight: "0px",
    },
}))

const FwWrapper = styled('div')(css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '1 / span 12',
    width: '100%',
    [theme.mediaQueries.smedium]: {
        gridColumn: '2 / span 10',
    },
    "& .textHeroBlock": {
        maxWidth: "100%",
        fontSize: "24px",
        marginTop: "50px",
        [theme.mediaQueries.smedium]: {
            marginTop: "0px",
            maxWidth: "50%",
            fontSize: "42px",
        },
    },
}))

const ProductIndividualImageBlock = styled('div')(css({
    height: "400px",
    marginLeft: "-16px",
    marginRight: "-16px",
    [theme.mediaQueries.smedium]: {
        height: "auto",
        marginLeft: "0",
        marginRight: "0",
    },
    "& div": {
        height: "100%",
        [theme.mediaQueries.smedium]: {
            height: "auto",
        },
        "& img": {
            objectFit: "cover;",
            objectPosition: "top center",
            [theme.mediaQueries.smedium]: {
                objectFit: "unset;",
                objectPosition: "unset",
            },
        },
    },
}))

const TwoColsImageBlockContainer = styled('div')(css({
    "& .TwoColsImageContainer": {
        paddingTop: "8px",
        paddingBottom: "8px",
        [theme.mediaQueries.smedium]: {
            paddingTop: "60px",
            paddingBottom: "60px",
        },
    },
}))

export {LeftCol, RightCol, FwWrapper, ImageLeft, ImageRight, ProductIndividualImageBlock, TwoColsImageBlockContainer}