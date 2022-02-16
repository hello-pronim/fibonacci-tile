import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container, CounterWrapper, Loader, SlideItem } from "./styles";
import BannerType1 from "./bannerType1";
import BannerType2 from "./bannerType2";
import BannerType3 from "./bannerType3";

const Hero = ({ banners }) => {
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
    fade: true,
    speed: 1500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next + 1);
    },
  };
  return (
    <Container>
      <Slider {...settings} ref={slider}>
        {banners.map((banner: any) => {
          switch (banner.typeHandle) {
            case "bannerType1":
              return (
                <SlideItem key={`banner-${banner.id}`}>
                  <BannerType1 banner={banner} />
                </SlideItem>
              );
            case "bannerType2":
              return (
                <SlideItem key={`banner-${banner.id}`}>
                  <BannerType2 banner={banner} />
                </SlideItem>
              );
            case "bannerType3":
              return (
                <SlideItem key={`banner-${banner.id}`}>
                  <BannerType3 banner={banner} />
                </SlideItem>
              );
          }
        })}
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
