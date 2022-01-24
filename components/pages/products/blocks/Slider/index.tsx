import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "public/banner1.jpg";
import Slide2 from "public/banner2.jpg";
import {
  BannerTextWrapper,
  BannerDescription,
  BannerHeading,
  BannerSubHeading,
  Container,
  SliderItem,
  SliderWrapper,
} from "./styles";

function TopSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    center: true,
    speed: 500,
    arrows: false,
  };

  const slider = React.useRef<Slider>(null);

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };

  return (
    <Container>
      <SliderWrapper>
        <Slider {...settings} ref={slider}>
          <SliderItem onClick={() => gotoNext()}>
            <Image
              src={Slide1}
              alt="image-1"
              width={3080}
              height={1410}
              layout="responsive"
            />
            <BannerTextWrapper>
              <BannerSubHeading>VIEW OUR</BannerSubHeading>
              <BannerHeading>Terrazzo</BannerHeading>
              <BannerDescription>
                40 unique creations. Thoughtfully designed. <br /> Sustainably
                made. Purpose-built.
              </BannerDescription>
            </BannerTextWrapper>
          </SliderItem>
          <SliderItem onClick={() => gotoNext()}>
            <Image src={Slide2} alt="image-2" />
            <BannerTextWrapper>
              <BannerSubHeading>VIEW OUR</BannerSubHeading>
              <BannerHeading>Collection</BannerHeading>
              <BannerDescription>
                5 unique collections. Thoughtfully designed.
                <br /> Sustainably made. Purpose-built.
              </BannerDescription>
            </BannerTextWrapper>
          </SliderItem>
        </Slider>
      </SliderWrapper>
    </Container>
  );
}

export default TopSlider;
