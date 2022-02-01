import React from "react";
import Header from "@components/common/header";
import CollectionHero from "./blocks/CollectionHero";
import CollectionProducts from "./blocks/CollectionProducts";
import CollectionProjects from "./blocks/CollectionProjects";
import InlineSlider from "./blocks/inlineSlider";

const CollectionPage = ({ collection, products }) => {
  return (
    <>
      <Header mode="dark" />
      <CollectionHero collection={collection} />
      {products && <CollectionProducts products={products} />}
      {collection.projects && (
        <CollectionProjects projects={collection.projects} />
      )}
      {collection?.gallery?.length > 0 && (
        <InlineSlider images={collection.gallery} />
      )}
    </>
  );
};

export default CollectionPage;
