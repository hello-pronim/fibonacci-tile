import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

interface IsActiveProps {
  active: boolean;
}

const FilterItem = styled("div")(
  css({
    marginRight: "10px",
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    textTransform: "uppercase",
    "&:hover": {
      background: theme.colors.background,
    },
    "&.activeFilter": {
      background: theme.colors.background,
    },
    [theme.mediaQueries.xLarge]: {
      width: "190px",
    },
  })
);

const FilterInnerMobile = styled("div")(
  css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    svg: {
      width: "30px",
      height: "16px",
    },
    ".mobileDetails": {
      maxWidth: "200px",
    },
  })
);

const ProductsFilterContainer = styled("div")(
  css({
    display: "flex",
    position: "relative",
  })
);

const ProductFilterItem = styled("div")(
  css({
    position: "relative",
    width: "200px",
    flexGrow: 1,
    "&:first-child": {
      ".filterInner": {
        borderLeft: "1px solid #c4c4c4",
      },
    },
    "&.activeFilter:after": {
      position: "absolute",
      content: "",
      display: "block",
      width: "100%",
      height: "1px",
      backgroundColor: theme.colors.white,
      bottom: "0px",
    },
    ".filterInner": {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "20px 40px",
      minHeight: "60px",
      borderRight: "1px solid #c4c4c4",
    },
  })
);

const ProductFilterItemTitle = styled("div")(
  css({
    border: "none",
  })
);

const ClearFilter = styled("div")(
  css({
    display: "none",
    alignItems: "center",
    columnGap: "8px",
    position: "absolute",
    bottom: "-20px",
    border: "solid 1px #c4c4c4",
    color: "#141414",
    fontSize: "14px",
    lineHeight: "24px",
    padding: "7px 12px 7px 12px",
    height: "24px",
    borderRadius: "24px",
    cursor: "pointer",
    marginLeft: "50%",
    left: "-95px",
    backgroundColor: theme.colors.white,
    [theme.mediaQueries.small]: {
      display: "flex",
    },
  })
);

const ApplyButton = styled("button")(
  css({
    border: "solid 1px #D4D4D8",
    background: theme.colors.background,
    marginTop: "30px",
    display: "block",
    color: theme.colors.charcoal,
    fontSize: "16px",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderRadius: "0",
    width: "96%",
  })
);

const CloseButton = styled("button")(
  css({
    display: "block",
    float: "right",
    background: "none",
    border: "none",
  })
);

const Container = styled("div")(({ active }: IsActiveProps) =>
  css({
    position: "fixed",
    top: "0",
    zIndex: "9999",
    width: "100%",
    opacity: active ? 1 : 0,
    transition: active ? "opacity 0.4s ease-in-out" : "none",
  })
);

const DisplayIcon = styled("div")(
  css({
    path: {
      fill: theme.colors.white,
    },
  })
);

const DisplayOptions = styled("div")(
  css({
    display: "flex",
    borderRadius: "40px",
    background: theme.colors.background,
    padding: "5px 0",
  })
);

const DisplayOptionsContainer = styled("div")(
  css({
    display: "block",
    borderRight: "3px solid #edece8",
    borderLeft: "3px solid #edece8",
    margin: "0 20px",
    padding: "0 20px",
    [theme.mediaQueries.small]: {
      display: "none",
    },
  })
);

const FilterContainer = styled("div")(
  css({
    padding: "0 40px",
    background: theme.colors.background,
  })
);

const Filters = styled("div")(
  css({
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    [theme.mediaQueries.small]: {
      display: "none",
    },
  })
);

const IconContainer = styled("div")(({ active }: IsActiveProps) =>
  css({
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    width: "70px",
    margin: "0 5px",
    background: active ? "#b0aba7" : "#fff",
    borderRadius: "40px",
    padding: "10px",
    "&:hover": {
      background: "#b0aba7",
    },
  })
);

const LogoWrapper = styled("div")(
  css({
    paddingLeft: "20px",
    minWidth: "100px",
    [theme.mediaQueries.small]: {
      minWidth: "60px",
    },
  })
);

const MobileFilter = styled("div")(
  css({
    display: "none",
    alignItems: "center",
    [theme.mediaQueries.small]: {
      display: "flex",
    },
  })
);

const MobileFilterContainer = styled("div")(
  css({
    zIndex: 99999,
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.background,
    padding: "15px",
  })
);

const ProductSelection = styled("div")(({ active }: IsActiveProps) =>
  css({
    display: "flex",
    paddingTop: "19.5px",
    paddingLeft: "33px",
    paddingBottom: "19.5px",
    paddingRight: "33px",
    backgroundColor: theme.colors.background,
    justifyContent: "space-between",
    flex: "1",
    textTransform: "uppercase",
  })
);

const SearchItem = styled("div")(({ active }: IsActiveProps) =>
  css({
    display: "flex",
    justifyContent: "center",
    padding: "2px",
    marginRight: "10px",
    cursor: "pointer",
    textTransform: "uppercase",
    background: active ? theme.colors.background : "none",
    "&:hover": {
      background: theme.colors.background,
    },
  })
);

const Selections = styled("div")(
  css({
    display: "none",
    color: theme.colors.concrete,
    marginLeft: "4px",
  })
);

const TopBar = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    justifyContent: "space-between",
    padding: 0,
    [theme.mediaQueries.small]: {
      padding: "10px",
    },
  })
);

const ColorSchemeItem = styled("div")(({ active }: IsActiveProps) =>
  css({
    display: "flex",
    justifyContent: "center",
    padding: "2px",
    marginRight: "10px",
    cursor: "pointer",
    textTransform: "uppercase",
    "&:hover, &.activeFilter": {
      background: theme.colors.background,
    },
  })
);

const ColorSchemes = styled("div")(({ active }: IsActiveProps) =>
  css({
    display: "block",
  })
);

const ProductItem = styled("div")(({ active }: IsActiveProps) =>
  css({
    display: "block",
  })
);

const SortByItem = styled("div")(({ active }: IsActiveProps) =>
  css({
    display: "block",
  })
);

export {
  ApplyButton,
  CloseButton,
  ColorSchemeItem,
  ColorSchemes,
  Container,
  DisplayIcon,
  DisplayOptions,
  DisplayOptionsContainer,
  FilterContainer,
  Filters,
  IconContainer,
  LogoWrapper,
  MobileFilter,
  MobileFilterContainer,
  ProductItem,
  ProductSelection,
  SearchItem,
  Selections,
  SortByItem,
  TopBar,
};
