import ProductCard from "@components/common/product/card";
import { useAppContext } from "@contexts/AppContext";
import Text from "@components/common/typography";
import Slider from "react-slick";
import theme from 'styles/theme';

import {
  RelatedProductsContainer,
  Heading,
  Container,
  SliderWrapper,
} from "./styles";
import { css } from "@styled-system/css";

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

const RelatedProducts = ({ products, title }) => {
  const { state, dispatch } = useAppContext();
  return (
    <RelatedProductsContainer id="related-products">
      <Heading>
        <Text
          altFont={true}
          variant="Display-Medium"
          css={css({
            fontSize: 24,
            [theme.mediaQueries.small]: {
              fontSize: 42,
            },
          })}
        >
          {title}
        </Text>
      </Heading>
      <Container>
        {products?.map((product) => {
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
      </Container>
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
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;
