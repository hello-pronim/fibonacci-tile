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
          {imageBlock?.image?.length > 0 && (
            <Image
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL={imageBlock.image[0]?.url}
              src={imageBlock.image[0]?.url}
              alt={imageBlock.image[0]?.id}
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
