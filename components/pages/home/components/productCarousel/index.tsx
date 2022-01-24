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
} from "./styles";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "styles/theme";
import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Bloc from "public/tmp/prod/bloc.jpeg";
import Brackish from "public/tmp/prod/brackish.jpeg";
import Carmelita from "public/tmp/prod/carmelita.jpeg";
import CloudBurst from "public/tmp/prod/cloudBurst.jpeg";
import CoolStream from "public/tmp/prod/coolStream.jpeg";

const ProductCarousel = () => {
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
    {
      id: "5",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "brackish",
      subHeading: "Complex • Robust • Diverse",
      title: "Brackish",
      uri: "/products/brackish",
      img1: Brackish,
    },
    {
      id: "6",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "carmelita",
      subHeading: "Complex • Robust • Diverse",
      title: "Carmelita",
      uri: "/products/carmelita",
      img1: Carmelita,
    },
    {
      id: "7",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "cloudburst",
      subHeading: "Complex • Robust • Diverse",
      title: "Cloudburst",
      uri: "/products/cloudburst",
      img1: CloudBurst,
    },
    {
      id: "8",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "coolstream",
      subHeading: "Complex • Robust • Diverse",
      title: "CoolStream",
      uri: "/products/coolstream",
      img1: CoolStream,
    },
    {
      id: "9",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "abstrakt",
      subHeading: "Complex • Robust • Diverse",
      title: "Abstrakt",
      uri: "/products/abstrakt",
      img1: Abstrakt,
    },
    {
      id: "10",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "act-three",
      subHeading: "Complex • Robust • Diverse",
      title: "Act Three",
      uri: "/products/act-three",
      img1: ActThree,
    },
    {
      id: "11",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "assemblage",
      subHeading: "Complex • Robust • Diverse",
      title: "Assemblage",
      uri: "/products/assemblage",
      img1: Assemblage,
    },
    {
      id: "12",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "bloc",
      subHeading: "Complex • Robust • Diverse",
      title: "Bloc",
      uri: "/products/bloc",
      img1: Bloc,
    },
    {
      id: "13",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "brackish",
      subHeading: "Complex • Robust • Diverse",
      title: "Brackish",
      uri: "/products/brackish",
      img1: Brackish,
    },
    {
      id: "14",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "carmelita",
      subHeading: "Complex • Robust • Diverse",
      title: "Carmelita",
      uri: "/products/carmelita",
      img1: Carmelita,
    },
    {
      id: "15",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "cloudburst",
      subHeading: "Complex • Robust • Diverse",
      title: "Cloudburst",
      uri: "/products/cloudburst",
      img1: CloudBurst,
    },
  ];

  return (
    <Container>
      <AccentText top={176}>An imaginative selection</AccentText>
      <NextWrapper onClick={() => gotoNext()}>
        <Arrow color={theme.colors.white} width={40} />
      </NextWrapper>
      <Wrapper>
        <AccentTextMobile css={css({ pb: 24 })}>
          An imaginative selection
        </AccentTextMobile>
        <Slider {...settings} ref={slider}>
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
