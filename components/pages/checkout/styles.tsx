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
    mt: 50,
    display: "flex",
    "@media screen and (max-width: 768px)": {
      px: 10,
    },
  })
);

const CheckoutContentWrapper = styled("div")(() =>
  css({
    paddingTop: "80px",
    paddingBottom: "80px"
  })
);

const CheckoutContainer = styled("section")(() =>
  css({
    gridColumn: '1 / span 12',
    position: "relative"
  })
);

const CheckoutWrapper = styled("div")(() =>
  css({
    display: "flex",
    flexDirection: "row",
  })
);

const LeftContent = styled("div")(({...props }: containerProps) =>
  css({
    width: props.displayRight === true ? "100%" : "100%",
    paddingRight: "0",
    pt: 138,
    [theme.mediaQueries.xMedium]: {
      paddingRight:  props.displayRight === true ? "480px" : 0,
    },
  })
);
const RightContent = styled("div")(({...props }: containerProps) =>
  css({
    overflow: "scroll",
    position: "absolute",
    right: [-16, -16, -40, -56, -80],
    width: "460px",
    height: "calc(100% - 80px)",
    mt: 80,
    border: `solid 1px ${theme.colors.stoneTints[7]}`,
    borderTop: "none",
    borderBottom: "none",
    pl: 20,
    'p': {
      pt: 20
    },
    display: "none",
    [theme.mediaQueries.xMedium]: {
      display: props.displayRight === true ? "block" : "none",
    },
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
