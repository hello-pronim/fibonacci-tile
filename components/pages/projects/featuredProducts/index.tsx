import React from "react";
import Text from "@components/common/typography";
import { LeftCol, RightCol } from "./styles";
import Container from "@components/common/layout/container";
import ProductCard from "@componentscommon/product/card";
import { useAppContext } from "@contexts/AppContext";
import css from '@styled-system/css';

const products = [
  {
    id: 1,
    name: "Neues Grey Superfine",
    description: " Word • Word • Word",
  },
  {
    id: 2,
    name: "Neues Grey Superfine",
    description: " Word • Word • Word",
  },
  {
    id: 3,
    name: "Neues Grey Superfine",
    description: " Word • Word • Word",
  },
  {
    id: 4,
name: "Neues Grey Superfine",
    description: " Word • Word • Word",
  },
];

const FeaturedProducts = () => {
  const { state, dispatch } = useAppContext();
  return (
    <Container css={css({pt: 180, pb: 120,})}>
      <LeftCol>
        <Text variant="Display-Medium" altFont>
          Featured Products
        </Text>
      </LeftCol>
      <RightCol>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                isSelected={
                  state?.selectedProducts.findIndex(
                    (sp) => sp.id === product.id
                  ) !== -1
                }
                toggleProductSelect={() => {
                  dispatch({
                    type: "TOGGLE_PRODUCT_SELECTION",
                    product,
                  });
                }}
                key={product.id}
                product={product}
              />
            );
          })}
      </RightCol>
    </Container>
  );
};
export default FeaturedProducts;
