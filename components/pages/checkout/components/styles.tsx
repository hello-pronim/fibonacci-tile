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
    fontSize: 0,
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
    fontSize: 2,
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
    paddingTop: "30px",
    maxWidth: "860px",
    "input[type='text'], input[type='tel'], input[type='email'], textarea, select": {
      fontSize: 2,
      padding: "20px 25px",
      color: "charcoal",
      fontFamily: 1,
      borderRadius: "0",
      border: "1px solid #B0ABA7",
      "&::-webkit-input-placeholder": {  
        color: "charcoal"
      },
      "&::-moz-placeholder": {  
        color: "charcoal"
      },
      "&:-ms-input-placeholder": { 
        color: "charcoal"
      },
      "&:-moz-placeholder": {  
        color: "charcoal"
      }
    },
    textarea: {
      height: "100px"
    }
  })
);


const OneItemRow = styled("div")(()=> 
  css({
    paddingBottom: "10px",
    width: "100%"
  })
);

const TwoItemRow = styled("div")(()=> 
  css({
    paddingBottom: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  })
);

const ThreeItemRow = styled("div")(()=> 
  css({
    paddingBottom: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  })
);

const InfoText = styled("div")(()=> 
  css({
    p: {
      fontsSize: 2,
      lineHeight: "22.4px",
      marginTop: "24px"
    }
  })
);

const Details = styled("div")(()=> 
  css({
    background: theme.colors.stoneTints[8],
    padding: "20px",
    marginTop: "24px",
    p: {
      fontSize: 2,
      lineHeight: "22.4px",
      strong: {
        marginBottom: "20px",
        display: "block"
      }
    }
  })
);

const InputFullwidth = styled("input")(()=> 
  css({
    width: "93.95%"
  })
);

const InputFourtyFive= styled("input")(()=> 
  css({
    width: "43%"
  })
);

const SelectFourtyFive = styled("select")(()=> 
  css({
    width: "43%",
    webkitAppearance: "none !important",
    mozAppearance: "none !important",
    appearance: "none !important",
    backgroundImage: `url("/assets/icons/dropdown_Icon.svg")`,
    backgroundPosition: "98%",
    backgroundRepeat: "no-repeat",
  })
);

const InputSixty = styled("input")(()=> 
  css({
    width: "58%"
  })
);

const InputThirty = styled("input")(()=> 
  css({
    width: "28%"
  })
);

const InputTwentyFour = styled("input")(()=> 
  css({
    width: "22%"
  })
);

const SelectThirty = styled("select")(()=> 
  css({
    width: "28%",
    webkitAppearance: "none !important",
    mozAppearance: "none !important",
    appearance: "none !important",
    backgroundImage: `url("/assets/icons/dropdown_Icon.svg")`,
    backgroundPosition: "98%",
    backgroundRepeat: "no-repeat",
  })
);

const TextareaFullwidth = styled("textarea")(()=> 
  css({
    width: "93.95%"
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
    TwoItemRow,
    ThreeItemRow,
    InfoText,
    Details,
    InputFullwidth,
    InputFourtyFive,
    SelectFourtyFive,
    InputSixty,
    InputThirty,
    SelectThirty,
    InputTwentyFour,
    TextareaFullwidth
  };
