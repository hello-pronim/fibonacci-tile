import React from "react";
import Text from "@components/common/typography";
import ProductCard from "@components/common/product/card";
import { useAppContext } from "@contexts/AppContext";
import { css } from "@styled-system/css";
import theme from "@styles/theme";
import { CollectionProductsContainer } from "./styles";

const CollectionProducts = ({ products, backgroundColor }) => {
  const { state, dispatch } = useAppContext();
  return (
    <CollectionProductsContainer
      css={css({
        background: backgroundColor ? backgroundColor : "#E6EBEA",
      })}
    >
      {products.map((product) => (
        <ProductCard
          product={product}
          isSelected={
            state?.selectedProducts.findIndex((sp) => sp.id === product.id) !==
            -1
          }
          toggleProductSelect={() =>
            dispatch({
              type: "TOGGLE_PRODUCT_SELECTION",
              product,
            })
          }
          key={`product-${product.id}`}
        />
      ))}
    </CollectionProductsContainer>
  );
};

export default CollectionProducts;
