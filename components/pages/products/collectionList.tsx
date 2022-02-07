import React from "react";
import ProductsHeader from "./Header";
import Slider from "./blocks/Slider";
import SectionTitle from "./blocks/SectionTitle";
import CTAPanel from "./blocks/CTAPanel";
import { Container } from "./styles";
import CollectionsItem from "./blocks/CollectionItem";

const CollectionsPage = ({ collections, collectionProducts, notifications, cta1, cta2 }) => {
  return (
    <Container>
      <ProductsHeader notifications={notifications} />
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
      {cta1?.CTAFields?.length > 0 &&
        <CTAPanel data={cta1.CTAFields[0]} imagePosition="right" />
      }
      {cta2?.CTAFields?.length > 0 &&
        <CTAPanel data={cta2.CTAFields[0]} imagePosition="left" />
      }
    </Container>
  );
};

export default CollectionsPage;
