import React from "react";
import RelatedProducts from "./blocks/relatedProducts";
import ProductsHeader from "./Header";
import InlineSlider from "./blocks/inlineSlider";
import Projects from "./blocks/projects";
import AccordionModule from "@components/modules/accordion";
import SingleHeroModule from "./blocks/singleHero";

const ProductPage = ({
  product,
  relatedProducts,
  specifications,
  collectionSlug,
  notifications,
}) => {
  const { backgroundColor } = product;
  return (
    <>
      <ProductsHeader mode="dark" notifications={notifications} />
      <SingleHeroModule product={product} collectionSlug={collectionSlug} />
      <Projects product={product} accentText="Fibonacci Live" />
      {product?.gallery?.length > 0 && (
        <InlineSlider images={product.gallery} />
      )}
      {specifications?.length > 0 && (
        <AccordionModule
          items={specifications}
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
