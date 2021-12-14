import React, { useState } from "react";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import Image from "next/image";
import Button from "@components/common/button";
import collection from "public/assets/temp/collection-temp.png";
import Abstrakt from 'public/tmp/prod/abstrakt.jpeg';
import Link from "next/link";
import ProductCard from "@components/common/product/xlCard";
import { useAppContext } from "@contexts/AppContext";
import {
  Container,
  IntroWrapper,
  Sections,
  ProjectWrapper,
  Project,
  Bottom,
  SectionList,
  SectionItem,
  Details,
  ImageWrapper,
  LinkWrapper,
  Pill,
} from "./styles";
import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "@stylestheme";

const product = {
    id: "1",
    richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "abstrakt",
    subHeading: "Complex • Robust • Diverse",
    title: "Abstrakt",
    uri: "products/abstrakt",
    img1: Abstrakt,
  };

const SingleHeroModule = () => {
  const { state, dispatch } = useAppContext();
  return (
    <Container>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gridColumn: "1 / span 3",
          height: "100%",
        })}
      >
        <div
          css={css({ display: "flex", flexDirection: "column", rowGap: 24 })}
        >
          <Text variant="Display-Large" altFont>
            Polarity
          </Text>
          <span
            css={css({
              borderLeft: `1px solid ${theme.colors.concrete}`,
              color: theme.colors.concrete,
              pl: 16,
            })}
          >
            <Text variant="Body-XSmall">No. 31</Text>
          </span>
          <Pill># New Release</Pill>
          <Text
            variant="Body-Large"
            css={css({ span: { color: theme.colors.taupe } })}
          >
            Complex <span>•</span> Robust <span>•</span> Diverse
          </Text>
          <Text variant="Body-Large">
            A democratic mix of colours, shapes and sizes, displaying the great
            egalitarian hallmarks of robustness and diversity.
          </Text>
        </div>
        <div
          css={css({
            display: "flex",
            columnGap: 32,
            alignItems: "flex-end",
          })}
        >
          <Image alt="" src={collection} width={136} height={72} />
          <div>
            <Text variant="Display-Overline">EXPLORE</Text>
            <LinkWrapper>
              <Link href="#">Collection name</Link>
              <Arrow type="short" />
            </LinkWrapper>
          </div>
        </div>
      </div>

      <div
        css={css({
          gridColumn: "5 / span 4",
          display: "flex",
          flexDirection: 'column',
          justifyContent: "space-between",
          height: "100%",
        })}
      >
        <div>
        <ProductCard
            displayMode={state?.productDisplayMode}
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
        <div css={css({ display: "flex", justifyContent: "space-between", flexDirection: 'row' })}>
          <LinkWrapper>
            <Arrow type="short" direction="left" />
            <Link href="#">Previous Product</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="#">Next Product</Link>
            <Arrow type="short" />
          </LinkWrapper>
        </div>
      </div>

      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          rowGap: 60,
          gridColumn: "10 / span 3",
          justifyContent: "space-between",
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
              Cursus velit adipiscing suspendisse semper
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
              Cursus velit adipiscing suspendisse semper
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
            <Text variant="Display-Overline">SIZES</Text>
            <Text variant="Body-Regular" css={{ color: theme.colors.taupe }}>
              Tiles 600x600x20mm <br />
              Slabs 400x400x20mm
            </Text>
          </div>
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
              Cursus velit adipiscing suspendisse semper
            </Text>
          </div>
          <LinkWrapper>
            <Link href="#">View technical specifications</Link>
            <Arrow type="short" />
          </LinkWrapper>
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
          <Text variant="Display-Overline">Overline Eleifend convallis</Text>
          <Text variant="Display-Small">Samples right now</Text>
          <Text variant="Body-Regular">
            Select your samples before 4pm for immediate dispatch and next
            working day delivery to Melbourne metropolitan and 1-2 days
            interstate.
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default SingleHeroModule;
