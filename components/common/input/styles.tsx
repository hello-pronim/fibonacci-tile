import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

interface StyledInputProps {
  fullWidth: boolean;
  halfWidth: boolean;
}
const StyledInput = styled("input")(
  ({ fullWidth, halfWidth }: StyledInputProps) =>
    css({
      width: fullWidth ? "100%" : halfWidth ? "50%" : "auto",
      padding: "16px",
      border: `1px solid ${theme.colors.concreteTints[5]}`,
      boxSizing: "border-box",
      fontFamily: "Everett",
      fontSize: "16px",
      lineHeight: "22.4px",
      color: theme.colors.charcoal,
      marginBottom: "24px",
      '&:disabled': {
        bg: 'transparent',
        '&::placeholder': {
          color: 'stone',
        },
        borderColor: 'stone',
      },
    })
);

export { StyledInput };
