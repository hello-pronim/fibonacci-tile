import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import ArrowButton from "@components/common/button/arrowButton";
import SelectedProductCard from "@components/common/product/selectedCard";
import { useAppContext } from "@contexts/AppContext";
import Button from "@components/common/button/arrowButton";

import {
  TopBar,
  ProductContainer,
  ButtonWrapper,
  BttnLeftPadding,
} from "./styles";

import {
  CheckoutFooter,
} from "../styles";
const numberToWord = ["one", "two", "threee", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

const Samples = ({ activeCheckoutStep, disabled, stepChange }) => {
  const { state, dispatch } = useAppContext();
  const selectedProducts = state.selectedProducts;
  const confirmedProducts = state.confirmedProducts;
  
  
  return (
    <>
      <TopBar>
        <Text
          variant="Display-Large"
          altFont
          css={css({
            fontSize: 32,
          })}
        >
          Confirm your {numberToWord[Number(process.env.NEXT_PUBLIC_SAMPLE_SELECTION_COUNT) - 1]} Fibonacci samples
        </Text>
        <ButtonWrapper>
          <Button
            mode="dark"
            title="Share my selections"
            onClick={() => {
              dispatch({
                type: "OPEN_DRAWER",
                value:
                  state.activeDrawerTab !== "share-selection"
                    ? true
                    : !state.openDrawer,
              }),
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "share-selection",
                });
            }}
          />
          <BttnLeftPadding>
            <Button
              mode="dark"
              title="Need more than six samples "
              onClick={() => {
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "need-more-selection"
                      ? true
                      : !state.openDrawer,
                }),
                  dispatch({
                    type: "SET_ACTIVE_DRAWER_TAB",
                    value: "need-more-selection",
                  });
              }}
            />
          </BttnLeftPadding>
        </ButtonWrapper>
      </TopBar>
      <ProductContainer>
        {selectedProducts?.length > 0 &&
          selectedProducts.map((product) => (
            <SelectedProductCard
              product={product}
              isSelected={
                confirmedProducts &&
                confirmedProducts.findIndex((sp) => sp?.id === product.id) !== -1
              }
              toggleProductSelect={() =>
                dispatch({
                  type: "TOGGLE_CONFIRM_PRODUCT_SELECTION",
                  product,
                })
              }
              key={`product-${product.id}`}
              totalSelectedProducts={selectedProducts.length}
            />
          ))}
      </ProductContainer>
      <CheckoutFooter>
        <span>{`You currently have ${confirmedProducts.length} selected, you can choose up 
        ${process.env.NEXT_PUBLIC_SAMPLE_SELECTION_COUNT} samples`}</span>
        <ArrowButton
          mode="light"
          bgColor="#141414"
          title="Continue to Details"
          link=""
          onClick={() => stepChange(2)}
          disabled={disabled}
        />
      </CheckoutFooter>
    </>
  );
};

export default Samples;
