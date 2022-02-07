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
    pt: 100,
    border: `solid 1px ${theme.colors.stoneTints[7]}`,
    pl: 20,
    display: props.displayRight === true ? "block" : "none",
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

export {
  CheckoutStepWrapper,
  CheckoutContentWrapper,
  CheckoutContainer,
  CheckoutWrapper,
  LeftContent,
  RightContent,
  SelectionWrapper
};
