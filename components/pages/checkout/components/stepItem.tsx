import { useAppContext } from "@contexts/AppContext";
import { StepItemWrapper, StepCount } from "./styles";
import CheckMarkIcon from "@components/icons/checkmark";


const StepItem = ({ step, activeStep = 1, stepChange }) => {
  const { state } = useAppContext();
  let stepName = ["Details", "Delivery", "Confirm"];
  if(state.selectedProducts.length > 6) {
    stepName = ["Sample", "Details", "Delivery", "Confirm"];
  }
  const itemStep = state.selectedProducts.length <= 6 ? step+1 : step;
  function handleStepChange () {
    if(itemStep < activeStep || (itemStep === 4 && activeStep === 4)) {
      stepChange(itemStep)
    }
  }
  return (
    <StepItemWrapper
    onClick={ () => handleStepChange()}
    >
      <StepCount
      active={activeStep === itemStep || itemStep < activeStep || (itemStep === 4 && activeStep === 4) ? true : false}
      >
        {itemStep < activeStep || (itemStep === 4 && activeStep === 4) ? <CheckMarkIcon color="white" /> : step}
      </StepCount>
      {stepName[ step - 1 ]}
    </StepItemWrapper>
  );
};

export default StepItem;
