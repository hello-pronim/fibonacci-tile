import React from "react";

import { Select, Option, SelectContainer, Span } from "../styles";

const MobileCategory = () => {
  const categorys = [
    "All",
    "product release",
    "press",
    "awards",
    "collaborations",
    "tips + tricks",
    "inspiration",
  ];
  return (
    <SelectContainer>
      <Span>filter</Span>
      <Select>
        {categorys.map((item, index) => {
          return <Option key={index}>{item}</Option>;
        })}
      </Select>
    </SelectContainer>
  );
};
export default MobileCategory;
