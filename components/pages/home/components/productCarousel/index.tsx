import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Container from "@components/common/layout/container";
import ProductCard from "@components/common/product/card";
import AccentText from "@components/common/accentText";
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

const ProductCarousel = () => {
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

  const products = [
    {
      id: 1,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 2,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 3,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 4,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 5,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 6,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 7,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 8,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 9,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 10,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 11,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 12,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 13,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 14,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 15,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
  ];

  return (
    <Container>
      <AccentText top={176}>A superlative selection</AccentText>
      <NextWrapper onClick={() => gotoNext()}>
        <Arrow color={theme.colors.white} width={40} />
      </NextWrapper>
      <Wrapper>
        <Slider {...settings} ref={slider}>
          {products && products.map((product) => {
            console.log(product.name);
            return (
              <ProductCard
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
    </Container>
  );
};

export default ProductCarousel;
