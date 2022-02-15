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
          Confirm your six Fibonacci samples
        </Text>
        <ButtonWrapper>
          <Button
            mode="dark"
            title="Share my selections"
            link="/products"
            size=""
          />
          <BttnLeftPadding>
            <Button
              mode="dark"
              title="Need more than six samples "
              link="/products"
              size=""
            />
          </BttnLeftPadding>
        </ButtonWrapper>
      </TopBar>
      <ProductContainer>
        {selectedProducts &&
          selectedProducts.map((product) => (
            <SelectedProductCard
              product={product}
              isSelected={
                confirmedProducts &&
                confirmedProducts.findIndex((sp) => sp.id === product.id) !== -1
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
      <CheckoutFooter contentAlign="right">
        <span>{`You currently have ${confirmedProducts.length} selected, you can choose up 6 samples`}</span>
        <ArrowButton
          mode="dark"
          bgColor="white"
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
