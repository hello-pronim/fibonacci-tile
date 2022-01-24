import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

const StyledSelect = styled("select")(
  css({
    padding: "10px 24px",
    backgroundColor: theme.colors.white,
    color: theme.colors.concreteTints[5],
    textTransform: "uppercase",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16.8px",
    letterSpacing: "1px",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    borderWidth: 0,
  })
);

export { StyledSelect };
