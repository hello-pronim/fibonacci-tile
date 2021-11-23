import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import { grid } from "styled-system";

export interface MenuItemProps {
  arrowVisible: boolean;
}

const FooterWrapper = styled("div")(() =>
  css({
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
    width: 115
  })
);

const MiddleWrapper = styled("div")(() =>
  css({
    display: "grid",
    px: 55,
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gridColumnGap: 25,
    gridRowGap: 25
  })
);

const MenuItem = styled("div")(() =>
  css({
    display: "flex",
    flexDirection: "column"
  })
);

const MenuItemTitle = styled("h2")(() =>
  css({
    color: theme.colors.stoneTints[7],
    fontSize: [2],
    fontFamily: 1,
  })
);

const MenuListItem = styled("a")(({ arrowVisible }: MenuItemProps) =>
  css({
    textDecoration: "none",
    fontSize: [2],
    fontFamily: 1,
    color: "white",
    marginTop: 20,
    position: "relative",
    "&:hover": {
      color: theme.colors.stoneTints[7],
    },
    "&:after": {
      position: "absolute",
      content: "' '",
      display: arrowVisible === true ? "block" : "none",
      height: 16,
      width: 16,
      backgroundImage: `url(${ "assets/icons/arrow.svg"})`,
      backgroundRepeat: "no-repeat",
      top: 3,
      left: 88
    },
  })
);



const MenuWrapper = styled("div")(() =>
  css({
    px:200
  })
);

const MenuRight = styled("div")(() =>
  css({
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
    MenuItem,
    MenuItemTitle,
    MenuListItem,
    MiddleWrapper,
    MenuRight,
    MenuRightItem,
    FooterBottomWrapper,
    FooterNav,
    NavItem
};
