import React from "react";
import Image from "next/image";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";
import { CollectionHeroContainer, CaptionText, ImageContent } from "./styles";

const CollectionHeroModule = ({ collection }) => {
  console.log(collection);
  return (
    <CollectionHeroContainer>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          background: collection.backgroundColor1 ? collection.backgroundColor1 : "#8B9B94",
          padding: "120px 80px 60px 80px",
          width: "30%",
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
              pt: 140,
              pb: 140,
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
            layout="responsive" // required
            src={collection.heroImage[0].url}
            alt={collection.slug}
            width={collection.heroImage[0].width}
            height={collection.heroImage[0].height}
          />
        )}
        <CaptionText>
          <Text as="h2" variant="Display-Medium" altFont>
            {collection.subline}
          </Text>
        </CaptionText>
      </ImageContent>
    </CollectionHeroContainer>
  );
};

export default CollectionHeroModule;
