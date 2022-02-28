import { useAppContext } from "@contexts/AppContext";
import { StepItemWrapper, StepCount } from "./styles";
import CheckMarkIcon from "@components/icons/checkmark";


const StepItem = ({ step, activeStep = 1 }) => {
  const { state } = useAppContext();
  let stepName = ["Details", "Delivery", "Confirm"];
  if(state.selectedProducts.length > 6) {
    stepName = ["Sample", "Details", "Delivery", "Confirm"];
  }
  return (
    <StepItemWrapper>
      <StepCount 
      active={activeStep === (state.selectedProducts.length <= 6 ? step+1 : step) ||  
      (state.selectedProducts.length <= 6 ? step+1 : step) < activeStep || 
      ((state.selectedProducts.length <= 6 ? step+1 : step) === 4 && activeStep === 4) ? true : false}>
        { (state.selectedProducts.length <= 6 ? step+1 : step) < activeStep || 
        ((state.selectedProducts.length <= 6 ? step+1 : step) === 4 && activeStep === 4) ? <CheckMarkIcon color="white" /> : step} 
      </StepCount>
      {stepName[ step - 1 ]}
    </StepItemWrapper>
  );
};

export default StepItem;
