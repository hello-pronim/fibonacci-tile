import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";


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
    width: props.displayRight === true ? "70%" : "100%",
  })
);
const RightContent = styled("div")(({...props }: containerProps) =>
  css({
    width: "30%",
    mt: 80,
    border: `solid 1px ${theme.colors.stoneTints[7]}`,
    borderTop: "none",
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
    pt: 24,
    pb: 24,
    pl: "2%",
    pr: "2%",
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: theme.colors.stoneTints[7],
    width: "96%",
    zIndex: "9999999",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "span": {
      fontSize: 16,
      mr:30,
      display: "inline-block"
    },
    ".back": {
      fontSize: 16,
      ml: 20,
      cursor: "pointer",
      textDecoration: "underline",
      [theme.mediaQueries.small]: {
        ml: 50,
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
  CheckoutFooter
};
