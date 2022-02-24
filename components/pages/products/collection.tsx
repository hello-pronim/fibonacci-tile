import React, { useLayoutEffect, useState } from "react";
import Header from "@components/common/header";
import { css } from "@styled-system/css";
import CollectionHero from "./blocks/CollectionHero";
import CollectionProducts from "./blocks/CollectionProducts";
import CollectionProjects from "./blocks/CollectionProjects";
import InlineSlider from "./blocks/inlineSlider";

const CollectionPage = ({ collection, products, notifications }) => {
  const [scrollPosition, setPosition] = useState(0);
  return (
    <>
      <Header mode="dark" notifications={notifications} />

      <CollectionHero collection={collection} width={"21.6%"} top={0} />

      {products && (
        <CollectionProducts
          backgroundColor={
            collection.backgroundColor2
              ? collection.backgroundColor2
              : "#E6EBEA"
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
            background: collection.backgroundColor2
              ? collection.backgroundColor2
              : "#E6EBEA",
          })}
        >
          <InlineSlider images={collection.galleryThumbs} />
        </div>
      )}
    </>
  );
};

export default CollectionPage;
