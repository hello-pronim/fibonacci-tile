import React from "react";
import Container from "@components/common/layout/container";
import ProductFilterBar from "@components/common/product/filterBar";
import ProductsHeader from "./Header";
import CTAPanel from "./blocks/CTAPanel";
import SectionTitle from "./blocks/SectionTitle";
import ProductLists from "./blocks/ProductList";

const ProductsPage = () => {
  return (
    <Container>
      <ProductsHeader />
      <SectionTitle title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built."/>
      <ProductFilterBar />
      <ProductLists items={[...Array(15)]} />
      <CTAPanel imagePosition="left" />
      <ProductLists items={[...Array(15)]} />
      <CTAPanel imagePosition="right" />
    </Container>
  );
};
export default ProductsPage;
