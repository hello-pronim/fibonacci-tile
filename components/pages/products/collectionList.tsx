import React from "react";
import ProductsHeader from "./Header";
import Slider from "./blocks/Slider";
import SectionTitle from "./blocks/SectionTitle";
import { Container } from "./styles";

const CollectionsPage = ({ collections, collectionProducts }) => {
  return (
    <Container>
      <ProductsHeader />
      <Slider />
      <SectionTitle
        show={false}
        title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built."
      />
      {collections.map((collection) => {
        return (
          <div key={collection.slug}>
            <div>{collection.title}</div>
            <div>
              {collectionProducts?.[collection.slug].map((product) => {
                return <>{product.title}</>;
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default CollectionsPage;
