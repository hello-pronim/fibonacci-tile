import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";


export interface containerProps {
  active: boolean
}

const StepItemWrapper = styled("div")(() =>
  css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "12px",
    textTransform: "uppercase",
    position: "relative",
    marginLeft: "40px",
    "&:before": {
      position: "absolute",
      content: "''",
      display: "block",
      top: "20px",
      left: "-50px",
      width: "40px",
      height: "1px",
      backgroundColor: "charcoal"
    },
    "&:first-child": {
      marginLeft: "0px",
      "&:before": {
        display: "none"
      },
    }
  })
);

const StepCount = styled("div")(({...props }: containerProps) =>
  css({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: props.active === true ? "black" : theme.colors.stoneTints[8],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: props.active === true ? "white" : theme.colors.stoneTints[5],
    fontSize: "16px",
    mb: 2
  })
);

const ProductContainer = styled("div")(()=> 
  css({
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridColumnGap: "15px",
    gridRowGap: "15px"
  })
);


const TopBar = styled("div")(() => 
  css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px"
  })
);
const ButtonWrapper = styled("div")(() => 
  css({
    display: "flex",
    '&:last-child': {
      marginLeft: "20px"
    }
  })
);

const BttnLeftPadding = styled("div")(()=> 
  css({
    paddingLeft: "20px"
  })
);


const FormWrapper = styled("div")(()=> 
  css({
    paddingTop: "30px"
  })
);

const OneItemRow = styled("div")(()=> 
  css({
    pb: 2
  })
);

const TwoItemRow = styled("div")(()=> 
  css({
    pb: 2
  })
);


export {
    StepItemWrapper,
    StepCount,
    TopBar,
    ProductContainer,
    ButtonWrapper,
    BttnLeftPadding,
    FormWrapper,
    OneItemRow,
    TwoItemRow
  };
