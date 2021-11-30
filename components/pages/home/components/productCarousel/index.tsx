import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useAppContext } from "@contexts/AppContext";
import Container from "@components/common/layout/container";
import ProductCard from "@components/common/product/card";
import AccentText, {AccentTextMobile} from "@components/common/accentText";
import {
  Wrapper,
  ProgBar,
  ProgBarInner,
  BottomBarInner,
  LinkWrapper,
  BottomBar,
  NextWrapper,
} from "./styles";
import { css } from "@styled-system/css";
import Arrow from "@componentscommon/icons/arrow";
import theme from "styles/theme";
import { useQuery } from "@apollo/client";
import { ProductsQuery } from "@gql/productGQL";
import NProgress from "nprogress";


const ProductCarousel = () => {
  const {data, error, loading} = useQuery(ProductsQuery);
  const { state, dispatch } = useAppContext();
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  if(loading) {
    NProgress.start();
  }else {
    NProgress.done();
  }
  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };
  var scrollCompletion = (currentSlide / slideCount) * 100;

  useEffect(() => {
    setCurrentSlide(
      slider.current && slider.current.innerSlider.state.currentSlide + 5
    );
    setSlideCount(
      slider.current && slider.current.innerSlider.state.slideCount
    );
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 10000,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next + 5);
    },
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

  return (
    <Container>
      <AccentText top={176}>A superlative selection</AccentText>
      <NextWrapper onClick={() => gotoNext()}>
        <Arrow color={theme.colors.white} width={40} />
      </NextWrapper>
      {data?.entries &&
      <Wrapper>
        <AccentTextMobile css={css({pb: 24})}>A superlative selection</AccentTextMobile>
        <Slider {...settings} ref={slider}>
          {data?.entries &&
            data.entries.map((product) => {
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
        <BottomBar>
          <ProgBar>
            <ProgBarInner css={css({ width: scrollCompletion + "%" })} />
          </ProgBar>
          <BottomBarInner>
            <span>
              {currentSlide} of {slideCount}
            </span>
            <LinkWrapper>
              <Link href="#">Explore the full range </Link>
              <Arrow type="short" />
            </LinkWrapper>
          </BottomBarInner>
        </BottomBar>
      </Wrapper>
      }
    </Container>
  );
};

export default ProductCarousel;
