import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import BlankBanner from "public/assets/temp/banner_blank.png";
import {
  Container,
  SlideItem,
  ContentWrapper,
  CounterWrapper,
  Loader,
  SlideImage,
  SliderText,
} from "./styles";

const TextSlider = () => {
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
              src={BlankBanner}
              alt="banner-blank"
              layout="responsive"
              width="1920"
              height="880"
            />
          </SlideImage>
          <ContentWrapper>
            <SliderText>
              A family business, Fibonacci® has liberated terrazzo from mundane
              to amazing. Our unique quality control measures, manufacturing and
              design philosophies, and guaranteed product accessibility makes us
              a business Like No Other.
            </SliderText>
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

export default TextSlider;
