import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import { display, maxWidth } from "styled-system";


export interface containerProps {
  displayRight: boolean
}

const CheckoutStepWrapper = styled("div")(() =>
  css({
    columnGap: "24px",
    pl: 80,
    pr: 80,
    mt: 50,
    display: "flex",
    "@media screen and (max-width: 768px)": {
      px: 10,
    },
  })
);

const CheckoutContentWrapper = styled("div")(() =>
  css({
    paddingLeft: "80px",
    paddingRight: "80px",
    paddingTop: "80px",
    paddingBottom: "80px"
  })
);

const CheckoutContainer = styled("section")(() =>
  css({
    position: "relative"
  })
);

const CheckoutWrapper = styled("div")(() =>
  css({
    display: "flex",
    flexDirection: "row"
  })
);

const LeftContent = styled("div")(({...props }: containerProps) =>
  css({
    width: props.displayRight === true ? "100%" : "100%",
    paddingRight:  props.displayRight === true ? "480px" : 0,
  })
);
const RightContent = styled("div")(({...props }: containerProps) =>
  css({
    position: "absolute",
    right: 0,
    width: "460px",
    height: "100%",
    mt: 80,
    border: `solid 1px ${theme.colors.stoneTints[7]}`,
    borderTop: "none",
    borderBottom: "none",
    pl: 20,
    display: props.displayRight === true ? "block" : "none",
    'p': {
      pt: 20
    }
  })
);

const SelectionWrapper = styled("div")(() => 
  css({
    pt: 45,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridColumnGap: "15px",
    gridRowGap: "15px"
  })
);

const NoSamples = styled("div")(() => 
css({
  pt: 80,
  pb: 80,
  pl: 80,
  pr: 80,
  "& p": {
    fontSize: 18,
    pb: 30
  }
})
);

const CheckoutFooter = styled("div")(({...props }) => 
  css({
    pt: 50,
    pb: 40,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "span": {
      fontSize: 16,
      mr:30,
      display: "inline-block"
    },
    ".back": {
      fontSize: 16,
      mr: 20,
      cursor: "pointer",
      textDecoration: "underline",
      [theme.mediaQueries.small]: {
        mr: 50,
      },
      "&:hover": {
        textDecoration: "none",
      },
    }
  })
);


export {
  CheckoutStepWrapper,
  CheckoutContentWrapper,
  CheckoutContainer,
  CheckoutWrapper,
  LeftContent,
  RightContent,
  SelectionWrapper,
  NoSamples,
  CheckoutFooter,
};
