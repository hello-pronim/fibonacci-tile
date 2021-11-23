import React, { useState } from "react";
import Image from "next/image";
import Text from "@components/common/typography";
import ProdImg from "public/placeholder-product-image.jpg";
import AddIcon from "@components/common/icons/add";
import { AddButton, Container, ImageWrapper, IconStyles } from "./styles";

const ProductCard = () => {
  const [isActive, setActive] = useState(false);

  return (
    <Container
      active={isActive}
      onClick={() => setActive(!isActive)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <ImageWrapper active={isActive}>
        <Image src={ProdImg} alt="Product-1" />
        <AddButton active={isActive}>
          <AddIcon active={isActive} css={IconStyles} />
          <Text Base="h6" variant="Display-Overline">
            ADD TO SELECTION
          </Text>
        </AddButton>
      </ImageWrapper>
      <Text Base="h3" variant="Display-XSmall" altFont={true}>
        Neues Grey Superfine
      </Text>
      <Text Base="h4" variant="Body-Small">
        Word • Word • Word
      </Text>
    </Container>
  );
};

export default ProductCard;
