import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

interface StyledButtonProps {
  type?: string;
  href?: string;
  variant?: string;
  color?: string;
  size?: string;
  rounded?: boolean;
}

const StyledButton = styled("a")(({ ...props }: StyledButtonProps) =>
  css({
<<<<<<< HEAD
    position: "relative",
    display: "inline-block",
    fontSize:
      props.size === "large"
        ? "24px"
        : props.size === "small"
        ? "12px"
        : "16px",
    lineHeight: 1,
    padding: "14px 20px",
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: props.variant === "contained" ? "none" : "solid",
    borderRadius: props.rounded ? "6px" : 0,
    color:
      props.color === "primary"
        ? theme.colors.charcoal
        : props.color === "secondary"
        ? theme.colors.white
        : props.color === "dark"
        ? theme.colors.charcoal
        : props.color === "light"
        ? theme.colors.white
        : theme.colors.charcoal,
    backgroundColor:
      props.color === "primary"
        ? theme.colors.white
        : props.color === "secondary"
        ? theme.colors.charcoal
        : props.color === "dark"
        ? theme.colors.white
        : props.color === "light"
        ? theme.colors.white
        : theme.colors.charcoal,
    transition: "all .4s ease-in-out",
    "&:hover": {
      borderStyle:
        props.color === "primary" || props.color === "dark"
          ? theme.colors.charcoal
          : props.color === "secondary" || props.color === "light"
          ? theme.colors.white
          : theme.colors.white,
      color:
        props.color === "primary"
          ? theme.colors.white
          : props.color === "secondary"
          ? theme.colors.charcoal
          : props.color === "dark"
          ? theme.colors.white
          : props.color === "light"
          ? theme.colors.white
          : theme.colors.charcoal,
      backgroundColor:
        props.color === "primary"
          ? theme.colors.charcoal
          : props.color === "secondary"
          ? theme.colors.white
          : props.color === "dark"
          ? theme.colors.charcoal
          : props.color === "light"
          ? theme.colors.white
          : theme.colors.charcoal,
=======
    a: {
      borderWidth: 1,
      borderColor: "#B0ABA7",
      borderStyle: props.visibleBorder === false ? "none" : "solid",
      fontSize: 16,
      padding: props.visibleArrow === false ? "14px 20px 14px 20px" : "14px 140px 14px 20px",
      display: "inline-block",
      lineHeight: "1",
      color: props.mode === "light" ? "white" : "charcoal",
      textDecoration: "none",
      position: "relative",
      transition: "all .4s ease-in-out",
      // paddingRight: props.visibleArrow === true ? 80 : 0,
      "&:after": {
        position: "absolute",
        content: "' '",
        display: props.visibleArrow === false ? "none" : "block",
        height: 21,
        width: 40,
        backgroundImage: `url(${
          props.mode === "light"
            ? "assets/icons/white-arrow.svg"
            : "assets/icons/black-arrow.svg"
        })`,
        backgroundRepeat: "no-repeat",
        top: "50%",
        transform: "translateY(-50%)",
        right: 25,
        transition: "all .4s ease-in-out",
      },
      "&:hover": {
        backgroundColor:
          props.visibleBorder === true
            ? props.mode === "light"
              ? "white"
              : "charcoal"
            : "transparent",
        color:
          props.visibleBorder === true
            ? props.mode === "light"
              ? "charcoal"
              : "white"
            : props.mode === "light"
            ? "white"
            : "charcoal",
        textDecoration: props.visibleBorder === false ? "underline" : "none",
        "&:after": {
          backgroundImage:
            props.visibleBorder === false
              ? `url(${
                  props.mode === "light"
                    ? "assets/icons/white-arrow.svg"
                    : "assets/icons/black-arrow.svg"
                })`
              : `url(${
                  props.mode === "light"
                    ? "assets/icons/black-arrow.svg"
                    : "assets/icons/white-arrow.svg"
                })`,
        },
      },
>>>>>>> feature/products
    },
  })
);

export { StyledButton };
