import { useAppContext } from "@contexts/AppContext";
import { StepItemWrapper, StepCount } from "./styles";
import CheckMarkIcon from "@components/icons/checkmark";


const StepItem = ({ step, activeStep = 1 }) => {
  const { state } = useAppContext();
  const stepName = ["Sample", "Details", "Delivery", "Confirm"];
  return (
    <StepItemWrapper>
      <StepCount active={activeStep === step ||  step < activeStep || (step === 4 && activeStep === 4) ? true : false}>
        {step < activeStep || (step === 4 && activeStep === 4) ? <CheckMarkIcon color="white" /> : step} 
      </StepCount>
      {stepName[step - 1]}
    </StepItemWrapper>
  );
};

export default StepItem;
