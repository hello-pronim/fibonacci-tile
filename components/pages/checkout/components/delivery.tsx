import { useAppContext } from "@contexts/AppContext";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import { useForm } from "react-hook-form";
import ArrowButton from "@components/common/button/arrowButton";
import {
  FormWrapper,
  OneItemRow,
  TwoItemRow,
  ThreeItemRow,
  InfoText,
  Details,
  InputSixty,
  InputThirty,
  SelectThirty,
  InputTwentyFour,
  InputFullwidth,
  TextareaFullwidth,
  InputFourtyFive,
  Seperator
} from "./styles";

import { CheckoutFooter } from "../styles";

const Delivery = ({ activeCheckoutStep, disabled, stepChange }) => {
  const { dispatch, state } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch({
      type: "SET_CHECKOUT_DETAILS",
      value: data,
    });
    const { checkoutDetails, confirmedProducts } = state;
    // console.log("checkoutDetails", checkoutDetails)
    const confirmedProductIds = [];
    if (confirmedProducts?.length > 0) {
      confirmedProducts.forEach((product) => {
        confirmedProductIds.push(product.id);
      });
    }
    checkoutDetails["products"] = confirmedProductIds;

    // TODO: Api call s
    try {
      // const rawResponse = await fetch(process.env.NEXT_PUBLIC_SAMPLE_ORDERS_CONTROLLER_URL, {
      // 	method: 'POST',
      // 	headers: {
      // 		'Accept': 'application/json',
      // 		'Content-Type': 'application/json'
      // 	},
      // 	body: JSON.stringify(checkoutDetails)
      // });
      // const content = await rawResponse.json();
      // console.log("content", content);
    } catch (e) {
      console.log(e);
    }

    // TODO: Reset Checkout details & selected products
    stepChange(4);
  };
  return (
    <div>
      <Text
        variant="Display-Large"
        altFont
        css={css({
          fontSize: 42,
        })}
      >
        Delivery details
      </Text>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TwoItemRow>
            <InputFullwidth type="date" placeholder="Delivery Date" {...register("deliveryDate", {required: true})} />
          </TwoItemRow>
          <TwoItemRow>
            <InputSixty
              type="text"
              placeholder="Address"
              {...register("address", { required: true, maxLength: 80 })}
            />
            <InputThirty
              type="text"
              placeholder="Suburb"
              {...register("suburb", { required: true, maxLength: 100 })}
            />
          </TwoItemRow>
          <ThreeItemRow>
            <InputTwentyFour
              type="text"
              placeholder="Postcode"
              {...register("postcode", { required: true, maxLength: 80 })}
            />
            <SelectThirty {...register("state", { required: true })}>
              <option value="">State</option>
              <option value="NSW">NSW</option>
              <option value="VIC">QLD</option>
              <option value="SA">SA</option>
              <option value="TAS">TAS</option>
              <option value="VIC">VIC</option>
              <option value="WA">WA</option>
            </SelectThirty>
            <SelectThirty {...register("country", { required: true })}>
              <option value="">Country</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
            </SelectThirty>
          </ThreeItemRow>
          <Seperator/>
          <TwoItemRow>
            <InputFourtyFive type="text" placeholder="Site Contact" {...register("siteContact", {required: true, minLength: 6, maxLength: 12})} />
            <InputFourtyFive type="text" placeholder="Contact number" {...register("contactNumber", {required: true, minLength: 6, maxLength: 12})} />
          </TwoItemRow>
          <OneItemRow>
            <TextareaFullwidth
              placeholder="Additional Information/Special Requirements"
              {...register("information", { required: true })}
            ></TextareaFullwidth>
          </OneItemRow>
          {/* <InfoText>
            <p>
              <strong>NB:</strong> We can not send samples to PO Boxes.
            </p>
          </InfoText> */}
          {activeCheckoutStep === 3 && (
            <CheckoutFooter>
              <div className="back" onClick={() => stepChange(2)}>
                Back
              </div>
              <ArrowButton
                mode="light"
                bgColor="#141414"
                title="Continue to Confirmation"
                link=""
                disabled={disabled}
              />
            </CheckoutFooter>
          )}
          <Details className="detailsBox">
            <p>
              <strong>
               Delivery details
              </strong>
            </p>
            <p>
              As part of our commitment to the environment and keeping you up-to-date with the latest products and colours in our range we do
              not provide samples for libraries. Instead we encourage our customers to view our range and request samples as required, per project and take advantage of our same-day dispatch express service.
            </p>
          </Details>
        </form>
      </FormWrapper>
    </div>
  );
};

export default Delivery;
