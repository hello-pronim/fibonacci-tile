import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const StyledTextarea = styled("textarea")(
  css({
    width: "100%",
    padding: "16px",
    border: `1px solid ${theme.colors.concreteTints[5]}`,
    boxSizing: "border-box",
    fontFamily: "Everett",
    fontSize: "16px",
    lineHeight: "22.4px",
    color: theme.colors.charcoal,
    marginBottom: "24px",
  })
);

export { StyledTextarea };
