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
    },
  })
);

export { StyledButton };
