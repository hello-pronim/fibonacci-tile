import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";
import { CollectionHeroContainer, ImageContent } from "./styles";
import styles from "./styles.module.scss";
import BreadCrumb from "@components/common/breadcrumb";

const CollectionHeroModule = ({ collection, width = "30%", top }) => {
  const crumbs = [
    { path: "/terrazzo", name: "Our Products" },
    { path: "/terrazzo/collections", name: "Collections", mobileHide: true },
    { name: collection.title },
  ];
  return (
    <CollectionHeroContainer>
      <div className="CollectionBreadCrumbBlock"
        css={css({
          maxWidth: "2560px",
          ml: "32px",
          pt: 12,
          pb: 0,
          position: "absolute",
        })}
      >
        <BreadCrumb crumbs={crumbs} pt={0} />
      </div>
      <div className="CollectionTextBlock"
        css={css({
          height: "auto",
          background: collection.backgroundColor1
            ? collection.backgroundColor1
            : "#8B9B94",
          padding: "104px 80px 50px 80px",
          width: width,
          top: top,
        })}
      >
        <div
          css={css({ display: "flex", flexDirection: "column", rowGap: 24 })}
        >
          <Text
            variant="Display-Large"
            css={css({
              fontSize: 42,
              [theme.mediaQueries.small]: {
                fontSize: 74,
              },
            })}
          >
            {collection.title}
          </Text>
          <Text
            variant="Body-Large"
            dangerouslySetInnerHTML={{ __html: collection.introduction }}
            css={css({
              fontSize: 20,
              pt: 20,
              pb: 30,
              [theme.mediaQueries.smedium]: {
                pt: 140,
                pb: 140,
              },
            })}
          />
          <Text
            variant="Display-Large"
            css={css({
              fontSize: 42,
              [theme.mediaQueries.small]: {
                fontSize: 74,
              },
            })}
          >
            Collection
          </Text>
        </div>
      </div>

      <ImageContent>
        {collection?.heroImage?.[0]?.url && (
          <Image
            className={styles.img}
            layout="responsive" // required
            placeholder="blur"
            blurDataURL={collection.heroImage[0].url}
            src={collection.heroImage[0].url}
            alt={collection.slug}
            width={collection.heroImage[0].width}
            height={collection.heroImage[0].height}
          />
        )}
      </ImageContent>
    </CollectionHeroContainer>
  );
};

export default CollectionHeroModule;
