import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

interface StyledSelectProps {
  variant: string;
  fullWidth?: boolean;
  halfWidth?: boolean;
}
const StyledSelect = styled("select")(
  ({ variant, fullWidth, halfWidth }: StyledSelectProps) =>
    css({
      backgroundImage: `url("assets/icons/arrowDown.svg")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "calc(100% - 16px) center",
      backgroundSize: "16px",
      width: fullWidth ? "100%" : halfWidth ? "50%" : "auto",
      padding: "16px 48px 16px 16px",
      backgroundColor: theme.colors.white,
      fontFamily: "Everett",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22.4px",
      color: theme.colors.charcoal,
      transition: "all 0.3s ease",
      border:
        variant === "outlined"
          ? `1px solid ${theme.colors.concreteTints[5]}`
          : "none",
      marginBottom: "24px",
      appearance: "none",
      outline: "none",
    })
);

export { StyledSelect };
