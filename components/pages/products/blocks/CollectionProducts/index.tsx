import React from "react";
import Text from "@components/common/typography";
import ProductCard from "@components/common/product/card";
import { useAppContext } from "@contexts/AppContext";
import { css } from "@styled-system/css";
import { CollectionProductsContainer } from "./styles";
import AccentText from "@components/common/accentText";

const CollectionProducts = ({ products, backgroundColor, collection }) => {
  const { state, dispatch } = useAppContext();
  return (
    <CollectionProductsContainer
      css={css({
        background: backgroundColor ? backgroundColor : "#E6EBEA",
      })}
    >
      <AccentText top={202}>{collection} Collection</AccentText>
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
