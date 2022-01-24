import { useAppContext } from "@contexts/AppContext";

import {
    StepItemWrapper,
    StepCount
} from "./styles";

const StepItem = ({step}) => {
    const { state: { checkoutStep } , dispatch } = useAppContext();
    const stepChange = (value) => {
        dispatch({
            type: "SET_CHECKOUT_STEP",
            value,
        });
    }
    const stepName = ["Sample", "Details", "Delivery", "Confirm"];
    return (    
        <StepItemWrapper onClick={() => stepChange(step)}>
            <StepCount active={checkoutStep === step ? true : false}>{step}</StepCount>
            {stepName[step-1]}
        </StepItemWrapper> 
    )
}

export default StepItem;