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
    gridColumn: ["1 / span 2", "1 / span 6", '2 / span 10'],
    pt: 60,
    pb: 40,
    width: "100%",
    [theme.mediaQueries.small]: {
      pt: 120,
  },
    ".slick-slider .slick-list": {
      paddingLeft: '0 !important',
      [theme.mediaQueries.small]: {
        pl: 50,
    },
      [theme.mediaQueries.medium]: {overflow: "visible"},
      ".slick-track": {
        display:'flex',
        ".slick-slide": {
          mr: 16,
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

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    svg: {
      transition: 'ease all 0.3s',
    },
    '&:hover': {
    },
  })
);

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
  BottomBar,
  ProgBar,
  ProgBarInner,
  BottomBarInner,
  LinkWrapper,
  SlideImage,
  SlideImageMobile,
};
