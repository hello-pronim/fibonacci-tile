import Container from "@components/common/layout/container";
import { LinkWrapper } from "../../styles";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import Link from "next/link";

const ArticleWayfinder = ({ content }) => {
  return (
    <Container css={css({ bg: "#ffffff", py: 25 })}>
      <div
        css={css({
          gridColumn: "4 / span 7",
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <LinkWrapper left>
          <Arrow type="short" direction="left" />
          <Link href={`/the-latest/${content.prev.slug}`}>
            Previous article
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href={`/the-latest/${content.next.slug}`}>Next article</Link>
          <Arrow type="short" direction="right" />
        </LinkWrapper>
      </div>
    </Container>
  );
};

export default ArticleWayfinder;
