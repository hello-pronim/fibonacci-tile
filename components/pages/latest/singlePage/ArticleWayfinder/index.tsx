import Container from "@components/common/layout/container";
import { LinkWrapper } from "../../styles";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import Link from "next/link";

const ArticleWayfinder = ({ content }) => {
  return (
    <Container css={css({ bg: "#ffffff", py: 25, position: 'sticky', bottom: 0 })}>
        {content.next?.slug && (
          <LinkWrapper left css={css({justifySelf: 'flex-start', gridColumn: 4})}>
            <Arrow type="short" direction="left" />
            <Link href={`/the-latest/${content.next.slug}`}>
              Previous article
            </Link>
          </LinkWrapper>
        )}
        {content.prev?.slug && (
          <LinkWrapper css={css({justifySelf: 'flex-end', gridColumn: 10})}>
            <Link href={`/the-latest/${content.prev.slug}`}>Next article</Link>
            <Arrow type="short" direction="right" />
          </LinkWrapper>
        )}
    </Container>
  );
};

export default ArticleWayfinder;
