import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "public/assets/temp/home-slide-1.jpg";
import Slide1Mobile from "public/assets/temp/home-slide-1-mobile.jpg";
import {
  Container,
  SlideItem,
  ContentWrapper,
  CounterWrapper,
  Loader,
  SlideImage,
  SlideImageMobile,
} from "./styles";
import { css } from "@emotion/react";

const Hero = () => {
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideTimer, setSlideTimer] = useState(65);

  useEffect(() => {
    setCurrentSlide(
      slider.current && slider.current.innerSlider.state.currentSlide + 1
    );
    setSlideCount(
      slider.current && slider.current.innerSlider.state.slideCount
    );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    autoplay: slideTimer && false,
    autoplaySpeed: 10000,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next + 1);
    },
  };

  return (
    <Container>
      <Slider {...settings} ref={slider}>
        <SlideItem>
          <SlideImage>
            <Image
              className="lrg-img"
              src={Slide1}
              alt=""
              layout="responsive"
              width="1920"
              height="880"
            />
          </SlideImage>
          <SlideImageMobile>
            <Image
              src={Slide1Mobile}
              alt=""
              layout="responsive"
              width="750"
              height="1240"
            />
          </SlideImageMobile>
          <ContentWrapper>
            <span>LIKE</span>
            <span>NO</span>
            <span>OTHER</span>
          </ContentWrapper>
        </SlideItem>
        <SlideItem>
          <Image
            src={Slide1}
            alt=""
            layout="responsive"
            width="1920"
            height="880"
          />
          <ContentWrapper>
            <span>LIKE</span>
            <span>NO</span>
            <span>OTHER</span>
          </ContentWrapper>
        </SlideItem>
      </Slider>
      <CounterWrapper>
        <span>
          {currentSlide} of {slideCount}
        </span>
        <Loader prog={slideTimer}>
          <svg>
            <circle cx="12" cy="12" r="12"></circle>
            <circle cx="12" cy="12" r="12"></circle>
          </svg>
        </Loader>
      </CounterWrapper>
    </Container>
  );
};

export default Hero;
