import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const BottomBarInner = styled("div")(
  css({
    // width: "100%",
    display: "flex",
    alignItems: "center",
    pt: 130,
    pl: 19,
  })
);

const LinkWrapper = styled("div")(({ color }) =>
  css({
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
    mt: 16,
    paddingRight: "4px",
    fontSize: "12px",
    color: color,
    svg: {
      transition: "ease all 0.3s",
      width: "12px",
      [theme.mediaQueries.medium]: {
        width: "20px",
      },
    },
    [theme.mediaQueries.medium]: {
      fontSize: "16px",
      columnGap: "10px",
      paddingRight: "10px",
    },
    "&:hover": {
      svg: {
        transform: "translateX(-6px)",
      },
      a: {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
    span: {
      "&:before": {
        position: "relative",
        backgroundColor: color,
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
        zIndex: 999,
      },
    },
    a: {
      textDecoration: "none",
      fontSize: "12px",
      lineHeight: 2,
      color: "inherit",
      [theme.mediaQueries.medium]: {
        fontSize: "16px",
      },
      "&:before": {
        position: "relative",
        backgroundColor: color,
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
        zIndex: 999,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
    "& .crumbHideOnMobile": {
      fontSize: "0px",
      position: "relative",
      [theme.mediaQueries.medium]: {
        fontSize: "16px",
      },
      "&:before": {
        display: "none",
        [theme.mediaQueries.medium]: {
          display: "block",
        },
      },
      "&:after": {
        content: "'•'",
        fontSize: "12px",
        color: "inherit",
        display: "block",
        position: "relative",
        top: "1px",
        [theme.mediaQueries.medium]: {
          display: "none",
        },
      },
    },
  })
);

const BackBttn = styled("div")(() =>
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    pr: "12px",
    cursor: "pointer",
    paddingRight: "8px",
    svg: {
      transition: "ease all 0.3s",
    },
    [theme.mediaQueries.medium]: {
      paddingRight: "10px",
    },
    "&:hover": {
      svg: {
        transform: "translateX(6px)",
      },
    },
    span: {
      textDecoration: "none",
      fontSize: "12px",
      lineHeight: 2,
      color: "inherit",
      [theme.mediaQueries.medium]: {
        fontSize: "16px",
      },
      "&:before": {
        position: "relative",
        backgroundColor: "inherit",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
  })
);

export { BackBttn, BottomBarInner, LinkWrapper };
