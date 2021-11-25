import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from '@components/common/layout/container';
import theme from "styles/theme";

const Container = styled(Cntnr)(css({
  overflowX: 'hidden',
}))

const Wrapper = styled("div")(
  css({
    position: "relative",
    gridColumn: ["1 / span 2", "1 / span 6", "1 / span 6", '2 / span 10'],
    py: 206,
    pb: 40,
    width: "100%",
    ".slick-slider .slick-list": {
      [theme.mediaQueries.medium]: {overflow: "visible"},
      ".slick-track": {
        display:'flex',
        ".slick-slide": {
          [theme.mediaQueries.medium]: {
            mr: 40,
          }
        },
        ".slick-current": {
          '.slide-content': {
            opacity: 1,
          },
        },
      },
    },
  })
);

const SlideItem = styled("div")(
  css({
    position: "relative",
  })
);

const ContentWrapper = styled("div")(
  css({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    my: "auto",
    px: 40,
    zIndex: 9999,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: "white",
    width: "100%",
    rowGap: 24,
    [theme.mediaQueries.medium]: {
      rowGap: 32,  
    },
    opacity: 0,
    transition: 'ease all 0.3s',
    h6: {
      fontSize: 16,
      [theme.mediaQueries.medium]: {
        fontSize: 20,
      },
    },
    h3: {
      fontSize: 36,
      [theme.mediaQueries.medium]: {
        fontSize: 80,
      },
    },
    a: {
      fontSize: 14,
      color: "white !important",
    },
  })
);

const BottomBar = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    mt: 40,
  })
);

const ProgBar = styled("div")(
  css({
    width: "100%",
    height: "3px",
    bg: "border",
  })
);
const ProgBarInner = styled("div")(
  css({
    height: "3px",
    bg: "charcoal",
    transition: "ease all 0.3s",
  })
);

const BottomBarInner = styled("div")(
  css({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: 24,
  })
);

const Loader = styled("div")(({ prog }: { prog: number }) =>
  css({
    width: "auto",
    svg: {
      width: 30,
      height: 30,
      circle: {
        width: 30,
        height: 30,
        position: "absolute",
        fill: "none",
        strokeWidth: "3",
        transform: "translate(3px, 3px)",
        strokeDasharray: "73",
        strokeLinecap: "round",
        "&:nth-of-type(1)": {
          strokeDashoffset: 0,
          stroke: "rgba(212,212,216,0.5)",
        },
        "&:nth-of-type(2)": {
          strokeDashoffset: `calc(73 - (73 * ${prog}) / 100)`,
          stroke: "#fff",
          animation: "percent 1.5s linear",
          animationDelay: "1s",
        },
      },
    },
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    svg: {
      transition: 'ease all 0.3s',
    },
    '&:hover': {
      svg: {
        transform: 'translateX(6px)',
      },
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "charcoal",
      '&:before': {
        position:'relative',
        backgroundColor:'charcoal',
        content: "' '",
        display: 'block',
        height: '2px',
        width: '100%',
        transform: 'translateY(40px)',
        transition: 'ease all 0.3s',
        pointerEvents: 'none',
        opacity: 0,
      },
      '&:hover': {
        '&:before': {
          transform: 'translateY(28px)',
          opacity: 1,
        },
      },
    },
  })
);

const Pill = styled('div')(css({
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
  py: '3.5px',
  px: '12px',
  bg: 'charcoal',
  position:'absolute',
  top: 32,
  left: 32,
  zIndex: 99999,
  textTransform: 'uppercase',
  color: 'white',
  borderRadius: 32,
  fontSize: 0,
  lineHeight: 2,
}))

const SlideImage = styled("div")(
  css({
    display: "none !important",
    "&: > *": { display: "none !important" },
    [theme.mediaQueries.small]: {
      display: "block !important",
    },
  })
);

const SlideImageMobile = styled("div")(
  css({
    display: "block !important",
    [theme.mediaQueries.small]: {
      display: "none !important",
    },
  })
);

export {
  Container,
  Wrapper,
  SlideItem,
  ContentWrapper,
  BottomBar,
  Loader,
  ProgBar,
  ProgBarInner,
  BottomBarInner,
  LinkWrapper,
  Pill,
  SlideImage,
  SlideImageMobile,
};
