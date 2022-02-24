import React, { useState } from "react";
import Image from "next/image";

import CheckIcon from "public/assets/icons/check.svg";

import {
  HiddenSizeSelectItemsWrapper,
  SizeSelect,
  SizeSelectDropdown,
  SizeSelectDropdownBodyWrapper,
  SizeSelectDropdownHeaderText,
  SizeSelectDropdownHeaderWrapper,
  SizeSelectDropdownWrapper,
  SizeSelectItem,
  SizeSelectItemText,
  SizeSelectItemCheck,
  SizeSelectItemWrapper,
  SizeSelectWrapper,
} from "./styles";

interface selectProps {
  name?: string;
  variant?: "outlined" | "default";
  value?: string;
  fullWidth?: boolean;
  halfWidth?: boolean;
  onChange?: (event) => void;
  sizes: any;
  disabled?: boolean;
}

export default function Select({
  name,
  variant = "outlined",
  fullWidth = false,
  halfWidth = false,
  value = "",
  onChange,
  sizes,
  disabled,
}: selectProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedSizeValue, setSelectedSizeValue] = useState(value);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleItemSelected = (sizeValue) => {
    const selected = sizes.find((size) => size.value === sizeValue);

    setSelectedSizeValue(sizeValue);
    if (selected) setSelectedSize(selected);
    setIsOpened(false);

    if (onChange) onChange(sizeValue);
  };

  const handleDropdownOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <SizeSelectWrapper>
      <SizeSelect
        variant={variant}
        fullWidth={fullWidth}
        halfWidth={halfWidth}
        open={isOpened}
        onClick={disabled ? null : handleDropdownOpen}
        disabled={disabled}
      >
        {selectedSizeValue !== "" ? selectedSize.title : "Select a size"}
      </SizeSelect>
      {selectedSize && (
        <input
          type="hidden"
          name="selectedProductCode[]['productCode']"
          value={selectedSize.value}
        />
      )}
      <SizeSelectDropdownWrapper open={isOpened}>
        <SizeSelectDropdown>
          <SizeSelectDropdownHeaderWrapper>
            <SizeSelectDropdownHeaderText>
              Select a size
            </SizeSelectDropdownHeaderText>
          </SizeSelectDropdownHeaderWrapper>
          <SizeSelectDropdownBodyWrapper>
            {sizes.map((size) => (
              <SizeSelectItemWrapper
                key={`size-${size.value}`}
                selected={size.value === selectedSizeValue}
                onClick={() => handleItemSelected(size.value)}
              >
                <SizeSelectItem>
                  <SizeSelectItemText>{size.title}</SizeSelectItemText>
                  {size.value === selectedSizeValue && (
                    <SizeSelectItemCheck>
                      <Image
                        src={CheckIcon}
                        alt="icon-check"
                        layout="responsive"
                        width="18"
                      />
                    </SizeSelectItemCheck>
                  )}
                </SizeSelectItem>
              </SizeSelectItemWrapper>
            ))}
          </SizeSelectDropdownBodyWrapper>
        </SizeSelectDropdown>
      </SizeSelectDropdownWrapper>
    </SizeSelectWrapper>
  );
}
