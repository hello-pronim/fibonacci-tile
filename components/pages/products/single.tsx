import React from "react";
import RelatedProducts from "./blocks/relatedProducts";
import ProductsHeader from "./Header";
import InlineSlider from "./blocks/inlineSlider";
import Projects from "./blocks/projects";
import AccordionModule from "@components/modules/accordion";
import SingleHeroModule from "./blocks/singleHero";

const ProductPage = ({ product, relatedProducts, technicalSpecifications }) => {
  const { backgroundColor } = product;
  return (
    <>
      <ProductsHeader mode="dark" />
      <SingleHeroModule product={product} />
      <Projects product={product} accentText="Fibonacci Live" />
      {product?.gallery?.length > 0 && (
        <InlineSlider images={product.gallery} />
      )}
      {technicalSpecifications?.length > 0 && (
        <AccordionModule
          items={technicalSpecifications}
          accentText="Technical Specifications"
          backgroundColor={backgroundColor}
        />
      )}
      {relatedProducts?.length > 0 && (
        <RelatedProducts
          title="More in our Terrazzo range"
          products={relatedProducts}
        />
      )}
    </>
  );
};

export default ProductPage;
