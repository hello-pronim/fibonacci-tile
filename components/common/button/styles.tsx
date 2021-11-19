import css from "@styled-system/css";
import styled from "@emotion/styled";
import DarkArrow from "public/assets/icons/black-arrow.svg";
import LightArrow from "public/assets/icons/white-arrow.svg";

export interface buttonModeProps {
    mode: string;
}

const ButtonWrapper = styled("div")(({ mode }: buttonModeProps) =>
  css({
    a: {
        borderWidth: 1,
        borderColor: mode === "light" ? "border" : "charcoal",
        borderStyle: "solid",
        fontSize: 20,
        padding: 15,
        display: "inline-block",
        lineHeight: "26px",
        color: mode === "light" ? "white" : "charcoal",
        textDecoration: "none",
        width: 315,
        position: "relative",
        "&:after": {
            position: "absolute",
            content: "' '",
            display: "block",
            height: 21,
            width: 40,
            backgroundImage: `url(${"assets/icons/black-arrow.svg"})`,
            backgroundRepeat: "no-repeat",
            top: 16,
            right: 25
        },
    },
  })
);

export {
    ButtonWrapper
};

