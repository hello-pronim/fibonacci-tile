import React from "react";
import ArrowButton from "@components/common/button/arrowButton";
import ProductCard from "@components/common/product/card";
import { useAppContext } from "@contexts/AppContext";
import Text from '@components/common/typography';
import {
  CollectionWrapper,
  CollectionDetailContainer,
  CollectionProductContainer,
  Title,
  Details,
  CollectionDetail,
} from "./styles";

const CollectionsItem = ({ collection, collectionProducts }) => {
  const { state, dispatch } = useAppContext();
  return (
    <CollectionWrapper>
      <CollectionDetailContainer>
        <CollectionDetail>
          <Title as="h2" variant="Display-Medium">{collection.title}</Title>
          <Details variant="Body-Large"
            dangerouslySetInnerHTML={{ __html: collection.introduction }}
          />
          <ArrowButton
            mode="dark"
            title="Explore Collection"
            link={`/terrazzo/collection/${collection.slug}`}
            visibleArrow={true}
          />
        </CollectionDetail>
      </CollectionDetailContainer>
      <CollectionProductContainer>
        {collectionProducts?.[collection.slug].map((product) => {
          return (
            <ProductCard
              displayMode="grid"
              product={product}
              isSelected={
                state?.selectedProducts.findIndex(
                  (sp) => sp.id === product.id
                ) !== -1
              }
              toggleProductSelect={() =>
                dispatch({
                  type: "TOGGLE_PRODUCT_SELECTION",
                  product,
                })
              }
              key={`product-${product.id}`}
            />
          );
        })}
      </CollectionProductContainer>
    </CollectionWrapper>
  );
};

export default CollectionsItem;
