import { StepItemWrapper, StepCount } from "./styles";

const StepItem = ({ step, activeStep = 1 }) => {
  const stepName = ["Sample", "Details", "Delivery", "Confirm"];
  return (
    <StepItemWrapper>
      <StepCount active={activeStep === step ? true : false}>{step}</StepCount>
      {stepName[step - 1]}
    </StepItemWrapper>
  );
};

export default StepItem;
