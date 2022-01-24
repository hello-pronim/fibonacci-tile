import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

interface StyledChipProps {
  variant?: string;
  color?: string;
  size?: string;
  rounded?: boolean;
  active?: boolean;
}

const StyledChip = styled("span")(({ ...props }: StyledChipProps) =>
  css({
    position: "relative",
    display: "inline-block",
    textTransform: "uppercase",
    fontSize:
      props.size === "large"
        ? "24px"
        : props.size === "small"
        ? "12px"
        : "16px",
    lineHeight: 1,
    padding: "8px 16px",
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: props.variant === "contained" ? "none" : "solid",
    borderRadius: props.rounded ? "32px" : 0,
    cursor: "pointer",
    color: props.active
      ? theme.colors.white
      : props.color === "primary" || props.color === "dark"
      ? theme.colors.charcoal
      : props.color === "secondary" || props.color === "light"
      ? theme.colors.white
      : theme.colors.charcoal,
    backgroundColor: props.active
      ? theme.colors.charcoal
      : props.color === "primary" || props.color === "dark"
      ? theme.colors.white
      : props.color === "secondary" || props.color === "light"
      ? theme.colors.charcoal
      : theme.colors.white,
    "&:hover": {
      color:
        props.color === "primary" || props.color === "dark"
          ? theme.colors.white
          : props.color === "secondary" || props.color === "light"
          ? theme.colors.charcoal
          : theme.colors.white,
      backgroundColor:
        props.color === "primary" || props.color === "dark"
          ? theme.colors.charcoal
          : props.color === "secondary" || props.color === "light"
          ? theme.colors.white
          : theme.colors.charcoal,
    },
  })
);

export { StyledChip };
