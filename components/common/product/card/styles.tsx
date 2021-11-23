import css from "@styled-system/css";
import styled from "@emotion/styled";

interface activeProp {
  active?: boolean;
}

const Container = styled("div")(({ active }: activeProp) =>
  css({
    transition: "ease all 0.3s",
    px: 37,
    py: 56,
    bg: active ? "cold" : "transparent",
    width: "100%",
    mx: "auto",
    textAlign: "center",
    h3: {
      mb: "8px",
    },
    "&:hover": {
      cursor: "pointer",
      ImageWrapper: {
        bg: "red",
      },
    },
  })
);
const AddButton = styled("div")(({ active }: activeProp) =>
  css({
    position: "absolute",
    display: "flex",
    columnGap: "8px",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1px",
    bottom: -16,
    width: active ? 180 : 32,
    height: 32,
    borderRadius: 32,
    bg: active ? "charcoal" : "white",
    border: "2px solid",
    borderColor: "concrete",
    transition: "ease all 0.3s",
    h6: {
      position: active ? "relative" : "absolute",
      transition: "ease all 0.3s",
      transitionDelay: active ? "300ms" : "0ms",
      opacity: active ? 1 : 0,
      color: "white",
    },
  })
);

const ImageWrapper = styled("div")(({ active }: activeProp) =>
  css({
    transition: "ease all 0.3s",
    position: "relative",
    boxShadow: active ? "none !important" : "default",
    display: "flex",
    justifyContent: "center",
    mb: 28,
  })
);

const IconStyles = css({
  width: 14,
});

export { Container, ImageWrapper, AddButton, IconStyles };
