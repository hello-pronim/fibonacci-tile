
import { useAppContext } from "@contexts/AppContext";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import { useForm } from 'react-hook-form';
import ArrowButton from "@components/common/button/arrowButton";
import {
    FormWrapper,
    OneItemRow,
    TwoItemRow,
    InputFullwidth,
    InputFourtyFive,
    SelectFourtyFive
} from "./styles";

import {
  CheckoutFooter,
} from "../styles";

const Details = ({ activeCheckoutStep, disabled, stepChange }) => {
    const { dispatch } = useAppContext();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      dispatch({
        type: "SET_CHECKOUT_DETAILS",
        value: data,
      });
      stepChange(3);
    }
    return (
      <div>
          <Text
              variant="Display-Large"
              altFont
              css={css({
                  fontSize: 32,
              })}
          >
              About you
          </Text>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <OneItemRow>
                  <InputFullwidth type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
              </OneItemRow>
              <TwoItemRow>
                  <InputFourtyFive type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                  <InputFourtyFive type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
              </TwoItemRow>
              <TwoItemRow>
                  <InputFourtyFive type="text" placeholder="Company" {...register("Company", {required: true, maxLength: 80})} />
                  <InputFourtyFive type="tel" placeholder="Contact number" {...register("Contact number", {required: true, minLength: 6, maxLength: 12})} />
              </TwoItemRow>
              <TwoItemRow>
                  <SelectFourtyFive {...register("job", { required: true })}>
                      <option value="">I’m a...</option>
                      <option value="interiorDesigner">Interior Designer</option>
                      <option value="architect">Architect</option>
                      <option value="builder">Builder</option>
                      <option value="installer">Installer</option>
                      <option value="stonemason">Stonemason</option>
                      <option value="other">Other</option>
                  </SelectFourtyFive>
              </TwoItemRow>
              {activeCheckoutStep === 2 && (
                <CheckoutFooter contentAlign="right">
                  <div className="back" onClick={() => stepChange(1)}>
                    Back
                  </div>
                  <ArrowButton
                    mode="dark"
                    bgColor="white"
                    title="Continue to Delivery"
                    link=""
                    disabled={disabled}
                  />
                </CheckoutFooter>
              )}
            </form>
          </FormWrapper>
      </div>
    )
}

export default Details;