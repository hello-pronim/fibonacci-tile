import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

interface SizeSelectProps {
  variant: string;
  fullWidth?: boolean;
  halfWidth?: boolean;
  open: boolean;
}

interface SizeSelectDropdownWrapperProps {
  open: boolean;
}

const SizeSelectWrapper = styled("div")(
  css({
    position: "relative",
    width: "100%",
  })
);

const SizeSelect = styled("div")(
  ({ variant, fullWidth, halfWidth, open }: SizeSelectProps) =>
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
      border: open
        ? "2px solid #000010"
        : variant === "outlined"
        ? `1px solid ${theme.colors.concreteTints[5]}`
        : "none",
      borderRadius: open && "4px",
      marginBottom: "24px",
      cursor: "default",
      appearance: "none",
    })
);

const SizeSelectDropdownWrapper = styled("div")(
  ({ open }: SizeSelectDropdownWrapperProps) =>
    css({
      display: open ? "block" : "none",
      width: "100%",
      maxHeight: "400px",
      overflowY: "scroll",
      position: "absolute",
      top: "60px",
      left: 0,
      zIndex: "10",
      background: "#FFFFF8",
      border: "1px solid #B0ABA7",
      boxShadow:
        "0px 24px 38px rgba(20, 20, 20, 0.08), 0px 9px 46px rgba(20, 20, 20, 0.08), 0px 11px 15px rgba(20, 20, 20, 0.16)",
    })
);

const SizeSelectDropdown = styled("div")(
  css({
    display: "block",
    width: "100%",
  })
);

const SizeSelectDropdownHeaderWrapper = styled("div")(
  css({
    display: "block",
    width: "100%",
    padding: "12px 12px 0 12px",
  })
);

const SizeSelectDropdownHeaderText = styled("h5")(
  css({
    fontFamily: "Everett",
    fontSize: "20px",
    lineHeight: "28px",
    color: theme.colors.charcoal,
  })
);

const SizeSelectDropdownBodyWrapper = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "12px 12px 0px 12px",
  })
);

const HiddenSizeSelectItemsWrapper = styled("div")(
  css({
    display: "none",
  })
);

const SizeSelectItemWrapper = styled("div")(
  ({ selected }: { selected: boolean }) =>
    css({
      position: "relative",
      padding: "16px 0",
      borderBottom: "1px solid #D6CEC5",
      cursor: "pointer",
    })
);

const SizeSelectItem = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  })
);

const SizeSelectItemText = styled("div")(
  css({
    fontFamily: "Everett",
    fontSize: "16px",
    lineHeight: "22.4px",
    color: theme.colors.charcoal,
    padding: "8px 32px 8px 8px",
  })
);

const SizeSelectItemCheck = styled("div")(
  css({
    width: "18px",
  })
);

export {
  HiddenSizeSelectItemsWrapper,
  SizeSelect,
  SizeSelectDropdown,
  SizeSelectDropdownBodyWrapper,
  SizeSelectDropdownHeaderText,
  SizeSelectDropdownHeaderWrapper,
  SizeSelectDropdownWrapper,
  SizeSelectItem,
  SizeSelectItemText,
  SizeSelectItemCheck,
  SizeSelectItemWrapper,
  SizeSelectWrapper,
};
