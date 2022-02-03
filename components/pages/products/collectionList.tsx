import React from "react";
import ProductsHeader from "./Header";
import Slider from "./blocks/Slider";
import SectionTitle from "./blocks/SectionTitle";
import CTAPanel from "./blocks/CTAPanel";
import { Container } from "./styles";
import CollectionsItem from "./blocks/CollectionItem";

const CollectionsPage = ({ collections, collectionProducts }) => {
  return (
    <Container>
      <ProductsHeader />
      <Slider />
      <SectionTitle
        show={false}
        title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built."
      />
      {collections.length > 0 && collections.map((collection) => {
        return(
          <CollectionsItem key={collection.id} collectionProducts={collectionProducts} collection={collection}/>
        )
      })}
      <CTAPanel imagePosition="right" />
      <CTAPanel imagePosition="left" />
    </Container>
  );
};

export default CollectionsPage;
