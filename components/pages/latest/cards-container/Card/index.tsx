import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { excerpt } from "@utils/utility";
import { StyledContainer, Title, CardPill, Description } from "./styles";

export const Card = ({
  component: { slug, title, newsCategory, newsComponents },
}): any => {
  const [imageBlock, setImageBlock] = useState(null);
  const [descBlock, setDescBlock] = useState(null);

  useEffect(() => {
    setImageBlock(
      newsComponents
        .filter(
          (component) =>
            component.__typename ===
            "newsComponents_heroImageFullWidth_BlockType"
        )
        .shift()
    );
    setDescBlock(
      newsComponents
        .filter(
          (component) =>
            component.__typename === "newsComponents_contentFullWidth_BlockType"
        )
        .shift()
    );
  }, []);

  return (
    <StyledContainer>
      <Link href={`/the-latest/${slug}`} passHref>
        <a>
          {imageBlock?.imageThumb?.[0]?.url && (
            <Image
              placeholder="blur"
              blurDataURL={imageBlock.blurThumb[0]?.url}
              width={imageBlock.imageThumb[0]?.width}
              height={imageBlock.imageThumb[0]?.height}
              src={imageBlock.imageThumb[0]?.url}
              alt={imageBlock.imageThumb[0]?.title}
            />
          )}
          {newsCategory?.length > 0 && (
            <CardPill>{"# " + newsCategory[0].slug}</CardPill>
          )}
          <Title>{title}</Title>
          {descBlock?.contentText && (
            <Description
              dangerouslySetInnerHTML={{
                __html: excerpt(descBlock.contentText),
              }}
            />
          )}
        </a>
      </Link>
    </StyledContainer>
  );
};
