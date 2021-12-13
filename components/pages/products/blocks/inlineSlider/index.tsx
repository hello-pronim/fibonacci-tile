import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Text from "@components/common/typography";
import Slide1 from "public/assets/temp/gallery-1.png";
import Slide1Mobile from "public/assets/temp/project-slide-mobile.png";
import AccentText, {AccentTextMobile} from "@components/common/accentText";
import AddIcon from "@components/icons/add";
import Link from "next/link";
import BoldArrow from "@components/common/icons/boldArrow";
import {
  Container,
  Wrapper,
  ProgBar,
  ProgBarInner,
  BottomBarInner,
  SlideItem,
  LinkWrapper,
  BottomBar,
  ContentWrapper,
  Pill,
  SlideImage,
  SlideImageMobile,
} from "./styles";
import { css } from "@styled-system/css";
import theme from "styles/theme";

const InlineSlider = () => {
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  var scrollCompletion = (currentSlide / slideCount) * 100;

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
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 10000,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next + 1);
    },
  };

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };
  const gotoPrev = () => {
    slider.current !== null && slider.current.slickPrev();
  };

  return (
    <Container>
      <AccentText top={206}>Gallery</AccentText>
      <Wrapper>
        <AccentTextMobile css={css({pb: 80})}>Gallery</AccentTextMobile>
        <Slider {...settings} ref={slider}>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="710"
                height="900"
              />
            </SlideImage>
          </SlideItem>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="710"
                height="900"
              />
            </SlideImage>
          </SlideItem>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="710"
                height="900"
              />
            </SlideImage>
          </SlideItem>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="710"
                height="900"
              />
            </SlideImage>
          </SlideItem>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="710"
                height="900"
              />
            </SlideImage>
          </SlideItem>
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
              <BoldArrow direction="left" onClick={() => gotoPrev()}/>
              <BoldArrow direction="right" onClick={() => gotoNext()}/>
            </LinkWrapper>
          </BottomBarInner>
        </BottomBar>
      </Wrapper>
    </Container>
  );
};

export default InlineSlider;
