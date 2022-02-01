import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Text from "@components/common/typography";
import Slide1 from "public/assets/temp/gallery-1.jpg";
import SlideMobile from "public/assets/temp/gallery-mobile.jpg";
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
  SlideImage,
  SlideImageMobile
} from "./styles";
import { css } from "@styled-system/css";
import theme from "styles/theme";

const InlineSlider = ({ images }) => {
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  var scrollCompletion = (currentSlide / slideCount) * 100;

  useEffect(() => {
    setCurrentSlide(
      slider.current && slider.current.innerSlider.state.currentSlide + 1
    );
    setSlideCount(
      // slider.current && slider.current.innerSlider.state.slideCount
      images?.length
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };
  const gotoPrev = () => {
    slider.current !== null && slider.current.slickPrev();
  };

  return (
    <Container id="gallery">
      <AccentText top={206}>Gallery</AccentText>
      <Wrapper>
        <AccentTextMobile css={css({pb: 80})}>Gallery</AccentTextMobile>
        <Slider {...settings} ref={slider}>
          {images.map((image, index) => {
            return(
              <SlideItem key={index}>
                <SlideImage>
                  <Image
                    src={image.url}
                    alt="image-1"
                    layout="responsive"
                    width="710"
                    height="900"
                  />
                </SlideImage>
                <SlideImageMobile>
                  <Image
                    src={image.url}
                    alt="image-1"
                    layout="responsive"
                    width="303"
                    height="384.08"
                  />
                </SlideImageMobile>
              </SlideItem>
            )
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
