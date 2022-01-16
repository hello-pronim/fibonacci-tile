import css from "@styled-system/css";
import styled from "@emotion/styled";

export interface containerProps {
  mode?: string;
  visibleArrow: boolean;
  visibleBorder: boolean;
}

const ArrowButtonWrapper = styled("div")(({ ...props }: containerProps) =>
  css({
    a: {
      borderWidth: 1,
      borderColor: "#B0ABA7",
      borderStyle: props.visibleBorder === false ? "none" : "solid",
      fontSize: 16,
      padding: "14px 140px 14px 20px",
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
    },
  })
);

export { ArrowButtonWrapper };
