import React from "react";
import Header from "@components/common/header";
import RelatedProducts from "./blocks/relatedProducts";
import InlineSlider from "./blocks/inlineSlider";
import Projects from "./blocks/projects";
import TechnicalSpecifications from "./blocks/TechnicalSpecifications";
import SingleHeroModule from "./blocks/singleHero";

const ProductPage = ({
  product,
  relatedProducts,
  specifications,
  notifications,
}) => {
  const { backgroundColor } = product;
  return (
    <>
      <Header mode="dark" notifications={notifications} />
      <SingleHeroModule product={product} />
      <Projects
        product={product}
        specifications={specifications}
        relatedProducts={relatedProducts}
        accentText="Fibonacci In Use"
      />
      {product?.gallery?.length > 0 && (
        <InlineSlider images={product.galleryThumbs} />
      )}
      {specifications?.length > 0 && (
        <TechnicalSpecifications
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
