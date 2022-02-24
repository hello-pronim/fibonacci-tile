import React, { useState } from "react";
import ProductSelectItem from "@components/common/select/productSelect/productSelectItem";

import {
  HiddenProductSelectItemsWrapper,
  ProductSelect,
  ProductSelectDropdown,
  ProductSelectDropdownBodyWrapper,
  ProductSelectDropdownHeaderText,
  ProductSelectDropdownHeaderWrapper,
  ProductSelectDropdownWrapper,
  ProductSelectItemWrapper,
  ProductSelectWrapper,
} from "./styles";

interface selectProps {
  name?: string;
  variant?: "outlined" | "default";
  value?: string;
  fullWidth?: boolean;
  halfWidth?: boolean;
  onChange?: (event) => void;
  products: any;
}

export default function Select({
  variant = "outlined",
  fullWidth = false,
  halfWidth = false,
  value = "",
  onChange,
  products,
}: selectProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(value);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductItemSelected = (productId) => {
    const selected = products.find((prod: any) => prod.id === productId);
    setSelectedProductId(productId);
    if (selected) setSelectedProduct(selected);
    setIsOpened(false);

    if (onChange) onChange(selected);
  };

  const handleProductSelectDropdownOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <ProductSelectWrapper>
      <ProductSelect
        variant={variant}
        fullWidth={fullWidth}
        halfWidth={halfWidth}
        open={isOpened}
        onClick={handleProductSelectDropdownOpen}
      >
        {selectedProduct !== null ? selectedProduct.title : "Choose a product"}
      </ProductSelect>
      {selectedProduct && (
        <input
          type="hidden"
          name="selectedProduct[]['id']"
          value={selectedProduct.id}
        />
      )}
      <ProductSelectDropdownWrapper open={isOpened}>
        <ProductSelectDropdown>
          <ProductSelectDropdownHeaderWrapper>
            <ProductSelectDropdownHeaderText>
              Choose a product
            </ProductSelectDropdownHeaderText>
          </ProductSelectDropdownHeaderWrapper>
          <ProductSelectDropdownBodyWrapper>
            {products.map((product: any) => (
              <ProductSelectItemWrapper key={`product-${product.id}`}>
                <ProductSelectItem
                  product={product}
                  selected={product.id === selectedProductId}
                  handleProductSelect={handleProductItemSelected}
                />
              </ProductSelectItemWrapper>
            ))}
          </ProductSelectDropdownBodyWrapper>
        </ProductSelectDropdown>
      </ProductSelectDropdownWrapper>
    </ProductSelectWrapper>
  );
}
