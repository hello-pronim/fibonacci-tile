import React from "react";
import ProductsHeader from "./Header";
import Slider from "./blocks/Slider";
import SectionTitle from "./blocks/SectionTitle";
import { Container } from "./styles";

const CollectionsPage = ({ collections }) => {
  return (
    <Container>
      <ProductsHeader />
      <Slider />
      <SectionTitle
        show={true}
        title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built."
      />
    </Container>
  );
};

export default CollectionsPage;
