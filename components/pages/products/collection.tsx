import React, { useLayoutEffect, useState } from "react";
import Header from "@components/common/header";
import { css } from "@styled-system/css";
import CollectionHero from "./blocks/CollectionHero";
import CollectionProducts from "./blocks/CollectionProducts";
import CollectionProjects from "./blocks/CollectionProjects";
import InlineSlider from "./blocks/inlineSlider";
import BreadCrumb from "@components/common/breadcrumb";

const CollectionPage = ({ collection, products, notifications }) => {
  const [scrollPosition, setPosition] = useState(0);
  const crumbs = [
    { path: "/terrazzo", name: "Our Products" },
    { path: "/terrazzo/collections", name: "Collections" },
    { name: collection.title },
  ];

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <>
      <Header mode="dark" notifications={notifications} />
      <div
        css={css({
          maxWidth: "2560px",
          pl: "27px",
          pt: 100,
          pb: 0,
        })}
      >
        <BreadCrumb crumbs={crumbs} pt={0} />
      </div>
      {scrollPosition < 1125 ? (
        <CollectionHero
          collection={collection}
          position={"fixed"}
          width={"21.6%"}
          zIndex={999}
          top={168}
        />
      ) : (
        <CollectionHero
          collection={collection}
          position={"relative"}
          width={"21.6%"}
          zIndex={999}
          top={1125}
        />
      )}

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
          <InlineSlider images={collection.gallery} />
        </div>
      )}
    </>
  );
};

export default CollectionPage;
