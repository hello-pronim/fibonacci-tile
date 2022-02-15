import {
  TopBar,
  ProductContainer,
  ButtonWrapper,
  BttnLeftPadding,
} from "./styles";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import SelectedProductCard from "@components/common/product/selectedCard";
import { useAppContext } from "@contexts/AppContext";
import Button from "@components/common/button/arrowButton";

const Samples = () => {
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
    </>
  );
};

export default Samples;
