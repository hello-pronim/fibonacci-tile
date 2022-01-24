import css from "@styled-system/css";
import Text from "@components/common/typography";
import styled from "@emotion/styled";
import theme from "styles/theme";

interface ActionBtnProps {
  checked: boolean;
}

const Wrapper = styled("div")(
  css({
    width: "100%",
    position: "relative"
  })
);

const Container = styled("div")(
  css({
    padding: "38px",
    textAlign: "center",
    transition: "background-color ease 0.3s",
    ".overlay": {
      visibility: "hidden",
      opacity: 0,
      // height: "100%",
      top: "70px",
      left: "0px",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      zIndex: "9999",
      margin: "0 30px",
      position: "absolute"
    },
    "&:hover": {
      backgroundColor: theme.colors.cold,
      ".overlay": {
        visibility: "visible",
        opacity: 1
      }
    },
  })
);

const ActionBtn = styled("button")(({ checked }: ActionBtnProps) =>
  css({
    display: "block",
    textTransform: "uppercase",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    cursor: "pointer",
    backgroundColor: checked ? theme.colors.charcoal : theme.colors.white,
    // border: checked ? "none" : "1px solid #B0ABA7",
    border: checked ?  `1px solid ${theme.colors.charcoal}` : "1px solid #B0ABA7",
    transition: "ease all 0.3s",
    ".hovered": {
      position: "absolute",
      visibility: "none",
      opacity: 0,
    },
    ".initial": {
      display: "flex",
      justifyContent: "center",
    },
    "&:hover": {
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "167px",
      height: "inherit",
      borderRadius: "32px",
      color: theme.colors.white,
      backgroundColor: theme.colors.charcoal,
      ".hovered": {
        display: "flex",
        opacity: 1,
        transitionDelay: "0.4s",
        transition: "ease all 0.3s",
        span: {
          marginLeft: "5px",
        },
      },
      ".initial": {
        display: "none",
      },
    },
  })
);

export {
  Wrapper,
  Container,
  ActionBtn
};
