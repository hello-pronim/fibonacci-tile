import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "@styles/theme";

interface ProductSelectProps {
  variant: string;
  fullWidth?: boolean;
  halfWidth?: boolean;
  open: boolean;
}

interface ProductSelectDropdownWrapperProps {
  open: boolean;
}

const ProductSelectWrapper = styled("div")(
  css({
    position: "relative",
    width: "100%",
  })
);

const ProductSelect = styled("div")(
  ({ variant, fullWidth, halfWidth, open }: ProductSelectProps) =>
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

const ProductSelectDropdownWrapper = styled("div")(
  ({ open }: ProductSelectDropdownWrapperProps) =>
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

const ProductSelectDropdown = styled("div")(
  css({
    display: "block",
    width: "100%",
  })
);

const ProductSelectDropdownHeaderWrapper = styled("div")(
  css({
    display: "block",
    width: "100%",
    padding: "12px 12px 0 12px",
  })
);

const ProductSelectDropdownHeaderText = styled("h5")(
  css({
    fontFamily: "Everett",
    fontSize: "20px",
    lineHeight: "28px",
    color: theme.colors.charcoal,
  })
);

const ProductSelectDropdownBodyWrapper = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "100%",
  })
);

const HiddenProductSelectItemsWrapper = styled("div")(
  css({
    display: "none",
  })
);

const ProductSelectItemWrapper = styled("div")(
  css({
    padding: "4px",
  })
);
export {
  HiddenProductSelectItemsWrapper,
  ProductSelect,
  ProductSelectDropdown,
  ProductSelectDropdownBodyWrapper,
  ProductSelectDropdownHeaderText,
  ProductSelectDropdownHeaderWrapper,
  ProductSelectDropdownWrapper,
  ProductSelectItemWrapper,
  ProductSelectWrapper,
};
