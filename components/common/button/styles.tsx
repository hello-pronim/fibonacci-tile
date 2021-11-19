import css from "@styled-system/css";
import styled from "@emotion/styled";

export interface containerProps {
    mode: string;
    visibleArrow: boolean;
    visibleBorder: boolean;
}


const ButtonWrapper = styled("div")(({ ...props }: containerProps) =>
  css({
    a: {
        borderWidth: 1,
        borderColor: props.mode === "light" ? "white" : "charcoal",
        borderStyle: props.visibleBorder === false ? "none" : "solid",
        fontSize: 20,
        padding: 15,
        display: "inline-block",
        lineHeight: "26px",
        color: props.mode === "light" ? "white" : "charcoal",
        textDecoration: "none",
        position: "relative",
        paddingRight: props.visibleArrow === true ? 80 : 0,
        "&:after": {
            position: "absolute",
            content: "' '",
            display: props.visibleArrow === false ? "none" : "block",
            height: 21,
            width: 40,
            backgroundImage: `url(${ props.mode === "light" ? "assets/icons/white-arrow.svg" : "assets/icons/black-arrow.svg"})`,
            backgroundRepeat: "no-repeat",
            top: 16,
            right: 25
        },
        "&:hover": {
            backgroundColor: props.visibleBorder === true ? 
            (props.mode === "light" ? "white" : "charcoal") : 
            "transparent",
            color: props.visibleBorder === true ? 
            (props.mode === "light" ? "charcoal" : "white") : 
            (props.mode === "light" ? "white" : "charcoal"),
            textDecoration: props.visibleBorder === false ? "underline" : "none",
            "&:after": {
                backgroundImage: props.visibleBorder === false ?
                `url(${ props.mode === "light" ? "assets/icons/white-arrow.svg" : "assets/icons/black-arrow.svg"})`:
                `url(${ props.mode === "light" ? "assets/icons/black-arrow.svg" : "assets/icons/white-arrow.svg"})`
            },
        }
    },
  })
);

export {
    ButtonWrapper
};

