import React from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "@styled-system/css";
import { useAppContext } from "@contexts/AppContext";
import ProductCard from "@components/common/product/xlCard";
import Text from "@components/common/typography";
import BreadCrumb from "@components/common/breadcrumb";
import SizeDisplay from "@components/common/product/card/SizeDisplay";
import Arrow from "@components/common/icons/arrow";
import theme from "@styles/theme";
import { Container, LinkWrapper, LinkWrapperLeft, Pill } from "./styles";

const SingleHeroModule = ({ product, collectionSlug }) => {
  const crumbs = [
    { path: "/terrazzo", name: "Our Products" },
    { path: "/terrazzo", name: "Terrazzo" },
    { name: product.title },
  ];
  const { state, dispatch } = useAppContext();
  const activeCollection = product.collections.find(
    (collection: any) => collection.slug === collectionSlug
  );
  return (
    <>
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
      <Container
        css={css({
          pt: 50,
        })}
      >
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gridColumn: "1 / span 2",
            gridRow: 2,
            height: "100%",
            [theme.mediaQueries.small]: {
              gridColumn: "1 / span 3",
              gridRow: 1,
            },
          })}
        >
          <div
            css={css({ display: "flex", flexDirection: "column", rowGap: 24 })}
          >
            <Text
              variant="Display-Large"
              altFont
              css={css({
                fontSize: 42,
                [theme.mediaQueries.small]: {
                  fontSize: 74,
                },
              })}
            >
              {product.title}
            </Text>
            <span
              css={css({
                borderLeft: `1px solid ${theme.colors.concrete}`,
                color: theme.colors.concrete,
                pl: 16,
              })}
            >
              <Text variant="Body-XSmall">No. {product.productNumber}</Text>
            </span>
            {product.label && <Pill># {product.label}</Pill>}
            <Text
              variant="Body-Large"
              css={css({ span: { color: theme.colors.taupe } })}
            >
              {product.subline}
            </Text>
            <Text
              variant="Body-Large"
              dangerouslySetInnerHTML={{ __html: product.designStory }}
            />
          </div>
          <div
            css={css({
              display: "flex",
              columnGap: 32,
              alignItems: "flex-end",
              py: 60,
            })}
          >
            {activeCollection.heroImageThumb?.[0]?.url && (
              <Image
                placeholder="blur"
                blurDataURL={activeCollection.blurThumb[0].url}
                alt={activeCollection.title}
                src={activeCollection.heroImageThumb[0].url}
                width={136}
                height={72}
              />
            )}
            <div>
              <Text variant="Display-Overline">EXPLORE COLLECTION</Text>
              <LinkWrapper>
                <Link href={`/terrazzo/${activeCollection.slug}`}>
                  {activeCollection?.title}
                </Link>
                <Arrow type="short" />
              </LinkWrapper>
            </div>
          </div>
          <div
            css={css({
              bg: theme.colors.greys[5],
              padding: 16,
              display: "flex",
              flexDirection: "column",
              rowGap: 16,
            })}
          >
            <Text variant="Display-Small">Samples right now</Text>
            <Text variant="Body-Regular">
              Select your samples before 4pm for immediate dispatch and next
              working day delivery to Melbourne metropolitan and 1-2 days
              interstate.
            </Text>
          </div>
        </div>
        <div
          css={css({
            gridColumn: "1 / span 2",
            gridRow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            [theme.mediaQueries.small]: {
              gridColumn: "5 / span 4",
            },
          })}
        >
          <div>
            <ProductCard
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
          </div>
          <div
            css={css({
              display: "none",
              justifyContent: "space-between",
              flexDirection: "row",
              mt: 52,
              [theme.mediaQueries.small]: {
                display: "flex",
              },
            })}
          >
            {product?.prev?.collections?.[0]?.slug && (
              <LinkWrapperLeft>
                <Arrow type="short" direction="left" />
                <Link
                  href={`/terrazzo/${product?.prev?.collections?.[0]?.slug}/${product.prev.slug}`}
                >
                  Previous Product
                </Link>
              </LinkWrapperLeft>
            )}
            {product.next && (
              <LinkWrapper>
                <Link
                  href={`/terrazzo/${product?.next?.collections?.[0]?.slug}/${product.next.slug}`}
                >
                  Next Product
                </Link>
                <Arrow type="short" />
              </LinkWrapper>
            )}
          </div>
        </div>
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            rowGap: 60,
            gridColumn: "1 / span 2",
            gridRow: 4,
            justifyContent: "space-between",
            [theme.mediaQueries.small]: {
              gridColumn: "10 / span 3",
              gridRow: 1,
            },
          })}
        >
          <div
            css={css({ display: "flex", flexDirection: "column", rowGap: 24 })}
          >
            <div
              css={css({
                borderBottom: `1px solid ${theme.colors.warm}`,
                pb: 16,
                mb: 16,
                display: "flex",
                flexDirection: "column",
              })}
            >
              <Text variant="Display-Overline">MATERIAL AND COMPOSITION</Text>
              <Text variant="Body-Regular" css={{ color: theme.colors.taupe }}>
                {product.materialsComposition}
              </Text>
            </div>
            <div
              css={css({
                borderBottom: `1px solid ${theme.colors.warm}`,
                pb: 16,
                mb: 16,
                display: "flex",
                flexDirection: "column",
              })}
            >
              <Text variant="Display-Overline">FINISH AND APPEARANCE</Text>
              <Text variant="Body-Regular" css={{ color: theme.colors.taupe }}>
                {product.finishAppearance}
              </Text>
            </div>
            {product?.productVariations?.length > 0 && (
              <div
                css={css({
                  borderBottom: `1px solid ${theme.colors.warm}`,
                  pb: 16,
                  mb: 16,
                  display: "flex",
                  flexDirection: "column",
                })}
              >
                <Text variant="Display-Overline">SIZES</Text>
                <Text
                  variant="Body-Regular"
                  css={{ color: theme.colors.taupe }}
                >
                  <SizeDisplay productVariations={product.productVariations} />
                </Text>
              </div>
            )}
            <div
              css={css({
                borderBottom: `1px solid ${theme.colors.warm}`,
                pb: 16,
                mb: "8px",
                display: "flex",
                flexDirection: "column",
              })}
            >
              <Text variant="Display-Overline">APPLICATIONS</Text>
              <Text variant="Body-Regular" css={{ color: theme.colors.taupe }}>
                {product.applications}
              </Text>
            </div>
            <LinkWrapper>
              <Link href="#technical-specifications">
                View technical specifications
              </Link>
              <Arrow type="short" />
            </LinkWrapper>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleHeroModule;
