import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
export interface containerProps {
  navOpen: boolean;
  position: string;
}

export interface navItemProps {
  mode: string;
}

export interface NavIconProps {
  isOpen: boolean;
}

const Container = styled("div")(({ ...props }: containerProps) =>
  css({
    position: props.position ? props.position : "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "white",
    borderBottom: "1px solid",
    transition: "ease all 0.3s",
    borderColor: props.navOpen ? "white" : "stone",
    zIndex: 10,
  })
);

const Wrapper = styled("div")(() =>
  css({
    width: "100%",
    maxWidth: 2560,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 32,
    height: 80,
    "@media screen and (max-width: 768px)": {
      px: 10,
    },
  })
);

const LogoWrapper = styled("div")(() =>
  css({
    justifySelf: "center",
  })
);

const NavRight = styled("div")(() =>
  css({
    display: "flex",
    flex: 1,
    minWidth: "-webkit-min-content",
    columnGap: [15, 15, 15, 15, 15, 30, 30],
    justifyContent: "flex-end",
    a: {
      display: "none",
      "&:nth-last-child(1)": {
        display: "block",
      },
    },
    [theme.mediaQueries.small]: {
      a: {
        "&:nth-last-child(2)": {
          display: "block",
        },
      },
    },
    [theme.mediaQueries.medium]: {
      a: {
        display: "block !important",
      },
    },
  })
);

const NavLeft = styled("div")(() =>
  css({
    display: "flex",
    flex: 0,
    minWidth: "-webkit-min-content",
    columnGap: [15, 15, 15, 15, 15, 30, 30],
    a: {
      display: "none",
    },
    [theme.mediaQueries.xSmall]: {
      flex: 1,
      a: {
        "&:nth-child(1)": {
          display: "block",
        },
      },
    },
    [theme.mediaQueries.small]: {
      a: {
        "&:nth-child(1)": {
          display: "block",
        },
        "&:nth-child(2)": {
          display: "block",
        },
      },
    },
    [theme.mediaQueries.medium]: {
      a: {
        display: "block !important",
      },
    },
  })
);

const NavItem = styled("a")(({ mode }: navItemProps) =>
  css({
    textDecoration: "none",
    fontSize: [1, 1, 1, 1, 1, 3, 3],
    fontFamily: 1,
    color: mode === "light" ? "white" : "charcoal",
    alignSelf: "center",
    fontWeight: 300,
  })
);

const NavIcon = styled("button")(({ isOpen }: NavIconProps) =>
  css({
    padding: 0,
    background: "none",
    border: "none",
    marginRight: "6px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    cursor: "pointer",
    [theme.mediaQueries.medium]: {
      display: "none",
    },
    "&:before": {
      position: "relative",
      backgroundColor: "charcoal",
      content: "' '",
      display: "block",
      height: "2px",
      marginBottom: isOpen ? "0px" : "4px",
      transition: "all .2s ease-in-out",
      width: 16,
      transform: isOpen && "translateY(1px) rotate(135deg)",
    },
    "&:after": {
      position: "relative",
      backgroundColor: "charcoal",
      content: "' '",
      display: "block",
      height: "2px",
      transition: "all .2s ease-in-out",
      width: 16,
      transform: isOpen && "translateY(-1px) rotate(-135deg)",
    },
  })
);

const NavDrawer = styled("div")(() =>
  css({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    background: "white",
    height: "calc(100% - 80px)",
    width: "100%",
    boxSizing: "border-box",
  })
);

const DrawerInner = styled("div")(() =>
  css({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    p: 16,
    a: {
      textAlign: "left",
      fontSize: 3,
      mr: "auto",
      py: "7px",
      mb: "15px",
    },
  })
);

const DrawerFooter = styled("div")(() =>
  css({
    bg: "cold",
    px: 15,
    py: 20,
  })
);

export {
  Container,
  Wrapper,
  NavLeft,
  NavRight,
  NavItem,
  LogoWrapper,
  NavIcon,
  NavDrawer,
  DrawerFooter,
  DrawerInner,
};
