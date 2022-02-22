import Image from "next/image";
import Link from "next/link";
import { excerpt } from "@utils/utility";
import { StyledContainer, Title, CardPill, Description } from "./styles";

export const Card = ({
  component: { slug, title, newsCategory, newsComponents },
}): any => {
  let imageBlock = null;
  let descBlock = null;
  newsComponents?.length > 0 &&
    newsComponents.forEach((component: any) => {
      if (
        component.__typename === "newsComponents_contentFullWidth_BlockType"
      ) {
        descBlock = component;
      }
      if (
        component.__typename === "newsComponents_heroImageFullWidth_BlockType"
      ) {
        imageBlock = component;
      }
    });
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
