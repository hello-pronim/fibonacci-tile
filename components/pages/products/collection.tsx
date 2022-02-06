import React from "react";
import Header from "@components/common/header";
import { css } from "@styled-system/css";
import CollectionHero from "./blocks/CollectionHero";
import CollectionProducts from "./blocks/CollectionProducts";
import CollectionProjects from "./blocks/CollectionProjects";
import InlineSlider from "./blocks/inlineSlider";

const CollectionPage = ({ collection, products, notifications }) => {
  return (
    <>
      <Header mode="dark" notifications={notifications} />
      <CollectionHero collection={collection} />
      {products && (
        <CollectionProducts
          backgroundColor={
            collection.backgroundColor ? collection.backgroundColor : "#E6EBEA"
          }
          products={products}
        />
      )}
      {collection?.featuredProjects?.length > 0 && (
        <CollectionProjects projects={collection.featuredProjects} />
      )}
      {collection?.gallery?.length > 0 && (
        <div
          css={css({
            background: collection.backgroundColor
              ? collection.backgroundColor
              : "#E6EBEA",
          })}
        >
          <InlineSlider images={collection.gallery} />
        </div>
      )}
    </>
  );
};

export default CollectionPage;
