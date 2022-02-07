import { useAppContext } from "@contexts/AppContext";

import {
    StepItemWrapper,
    StepCount
} from "./styles";

const StepItem = ({ step, click=false }) => {
    const { state: { checkoutStep } , dispatch } = useAppContext();
    const stepChange = (value, click) => {
        if(click) {
            dispatch({
                type: "SET_CHECKOUT_STEP",
                value,
            });
        }
    }
    const stepName = ["Sample", "Details", "Delivery", "Confirm"];
    return (    
        <StepItemWrapper 
        onClick={() => stepChange(step, click)}
        click={click}
        >
            <StepCount active={checkoutStep === step ? true : false}>{step}</StepCount>
            {stepName[step-1]}
        </StepItemWrapper> 
    )
}

export default StepItem;