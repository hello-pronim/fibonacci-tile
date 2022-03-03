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
    "input[type='text'], input[type='tel'], input[type='email'], input[type='date'], textarea, select": {
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
      },
    },
    textarea: {
      height: "100px"
    }
  })
);


const OneItemRow = styled("div")(()=> 
  css({
    boxSizing: 'initial',
    paddingBottom: "0",
    width: "100%",
    [theme.mediaQueries.xMedium]: {
      paddingBottom: "10px",
    },
  })
);

const TwoItemRow = styled("div")(()=> 
  css({
    boxSizing: 'initial',
    paddingBottom: "0px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.mediaQueries.xMedium]: {
      flexWrap: "unset",
      paddingBottom: "10px",
    },
  })
);

const ThreeItemRow = styled("div")(()=> 
  css({
    boxSizing: 'initial',
    paddingBottom: "0px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.mediaQueries.xMedium]: {
      flexWrap: "unset",
      paddingBottom: "10px",
    },
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
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    [theme.mediaQueries.xMedium]: {
      width: "93.95%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const InputFourtyFive= styled("input")(()=> 
  css({
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    [theme.mediaQueries.xMedium]: {
      width: "43%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const SelectFourtyFive = styled("select")(()=> 
  css({
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    webkitAppearance: "none !important",
    mozAppearance: "none !important",
    appearance: "none !important",
    backgroundImage: `url("/assets/icons/dropdown_Icon.svg")`,
    backgroundPosition: "98%",
    backgroundRepeat: "no-repeat",
    [theme.mediaQueries.xMedium]: {
      width: "43%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const InputSixty = styled("input")(()=> 
  css({
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    [theme.mediaQueries.xMedium]: {
      width: "58%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const InputThirty = styled("input")(()=> 
  css({
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    [theme.mediaQueries.xMedium]: {
      width: "28%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const InputTwentyFour = styled("input")(()=> 
  css({
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    [theme.mediaQueries.xMedium]: {
      width: "22%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const SelectThirty = styled("select")(()=> 
  css({
    webkitAppearance: "none !important",
    mozAppearance: "none !important",
    appearance: "none !important",
    backgroundImage: `url("/assets/icons/dropdown_Icon.svg")`,
    backgroundPosition: "98%",
    backgroundRepeat: "no-repeat",
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    [theme.mediaQueries.xMedium]: {
      width: "28%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const TextareaFullwidth = styled("textarea")(()=> 
  css({
    width: "auto",
    minWidth: "-webkit-fill-available",
    marginBottom: "10px",
    [theme.mediaQueries.xMedium]: {
      width: "93.95%",
      minWidth: "unset",
      marginBottom: "0px",
    },
  })
);

const Seperator = styled("hr")(()=> 
  css({
    width: "100%",
    mb: 50,
    mt: 50,
    background: "#D6CEC5"
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
    TextareaFullwidth,
    Seperator
  };
