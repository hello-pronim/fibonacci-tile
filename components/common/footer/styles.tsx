import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";



const FooterWrapper = styled("div")(() =>
  css({
    width: "100%",
    maxWidth: 2560,
    display: "flex",
    justifyContent: "space-between",
    px: 31,
    py: 65,
    backgroundColor: "charcoal"
  })
);

const LogoWrapper = styled("div")(() =>
  css({
   
  })
);

const MenuWrapper = styled("div")(() =>
  css({
    px:200
  })
);

const MenuRight = styled("div")(() =>
  css({
    px: 200,
    width: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "secondary"
  })
);

const MenuRightItem = styled("div")(() =>
  css({
    textTransform: "uppercase",
    transform: "rotate(-90deg)"
  })
);

const FooterBottomWrapper = styled("div")(() =>
  css({
    width: "100%",
    maxWidth: 2560,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 31,
    backgroundColor: theme.colors.greys[0]
  })
);

const FooterNav = styled("div")(() =>
  css({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 24
  })
);

const NavItem = styled("a")(() =>
  css({
    textDecoration: "none",
    fontSize: [1],
    fontFamily: 1,
    color: theme.colors.stoneTints[7],
    "&:hover": {
        color: "white"
      },
  })
);



export {
    FooterWrapper,
    MenuWrapper,
    LogoWrapper,
    MenuRight,
    MenuRightItem,
    FooterBottomWrapper,
    FooterNav,
    NavItem
};
