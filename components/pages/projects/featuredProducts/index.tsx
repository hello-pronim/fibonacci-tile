import React from "react";
import Text from "@components/common/typography";
import { LeftCol, RightCol, ProductGrid, SliderWrapper } from "./styles";
import Container from "@components/common/layout/container";
import ProductCard from "@componentscommon/product/card";
import { useAppContext } from "@contexts/AppContext";
import css from "@styled-system/css";
import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Slider from "react-slick";
import Bloc from "public/tmp/prod/bloc.jpeg";
import theme from "styles/theme";

const products = [
  {
    id: "1",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "abstrakt",
    subHeading: "Complex • Robust • Diverse",
    title: "Abstrakt",
    uri: "/products/abstrakt",
    img1: Abstrakt,
  },
  {
    id: "2",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "act-three",
    subHeading: "Complex • Robust • Diverse",
    title: "Act Three",
    uri: "/products/act-three",
    img1: ActThree,
  },
  {
    id: "3",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "assemblage",
    subHeading: "Complex • Robust • Diverse",
    title: "Assemblage",
    uri: "/products/assemblage",
    img1: Assemblage,
  },
  {
    id: "4",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "bloc",
    subHeading: "Complex • Robust • Diverse",
    title: "Bloc",
    uri: "/products/bloc",
    img1: Bloc,
  },
];

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  pauseOnHover: false,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedProducts = () => {
  const { state, dispatch } = useAppContext();
  return (
    <Container
      css={css({
        pt: 120,
        pb: 120,
        [theme.mediaQueries.small]: {
          pt: 180,
        },
      })}
    >
      <LeftCol>
        <Text
          variant="Display-Medium"
          css={css({
            fontSize: 32,
            [theme.mediaQueries.small]: {
              fontSize: 42,
            },
          })}
          altFont
        >
          Featured Products
        </Text>
      </LeftCol>
      <RightCol>
        {products && (
          <ProductGrid>
            {products.map((product) => {
              return (
                <ProductCard
                  isSelected={
                    state?.selectedProducts.findIndex(
                      (sp) => sp.id === product.id
                    ) !== -1
                  }
                  toggleProductSelect={() => {
                    dispatch({
                      type: "TOGGLE_PRODUCT_SELECTION",
                      product,
                    });
                  }}
                  key={product.id}
                  product={product}
                />
              );
            })}
          </ProductGrid>
        )}
        <SliderWrapper>
          <Slider {...settings}>
            {products &&
              products.map((product) => {
                return (
                  <ProductCard
                    isSelected={
                      state?.selectedProducts.findIndex(
                        (sp) => sp.id === product.id
                      ) !== -1
                    }
                    toggleProductSelect={() => {
                      dispatch({
                        type: "TOGGLE_PRODUCT_SELECTION",
                        product,
                      });
                    }}
                    key={product.id}
                    product={product}
                  />
                );
              })}
          </Slider>
        </SliderWrapper>
      </RightCol>
    </Container>
  );
};
export default FeaturedProducts;
