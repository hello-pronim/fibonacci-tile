import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useAppContext } from "@contexts/AppContext";
import Container from "@components/common/layout/container";
import ProductCard from "@components/common/product/card";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import {
  Wrapper,
  ProgBar,
  ProgBarInner,
  BottomBarInner,
  LinkWrapper,
  BottomBar,
  NextWrapper,
  Title
} from "./styles";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "styles/theme";

const ProductCarousel = ({ products }) => {
  const { state, dispatch } = useAppContext();
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    infinite: true,
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
      <AccentText top={160}>An imaginative selection</AccentText>
      <Wrapper>
        <AccentTextMobile css={css({ pb: 24 })}>
          An imaginative selection
        </AccentTextMobile>
        <Slider {...settings} ref={slider}>
          {products &&
            products.map((product: any) => {
              return (
                <ProductCard
                  key={`product-${product.id}`}
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
              <Link href="/terrazzo">Explore the full range </Link>
              {/* <Arrow type="short" /> */}
            </LinkWrapper>
          </BottomBarInner>
        </BottomBar>
      </Wrapper>
      <NextWrapper onClick={() => gotoNext()}>
        <Arrow color={theme.colors.white} width={40} />
      </NextWrapper>
    </Container>
  );
};

export default ProductCarousel;
