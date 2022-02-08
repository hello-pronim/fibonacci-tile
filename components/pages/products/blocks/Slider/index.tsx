import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  BannerTextWrapper,
  BannerDescription,
  BannerHeading,
  BannerSubHeading,
  Container,
  SliderItem,
  SliderWrapper,
} from "./styles";

function TopSlider({ items = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    center: true,
    speed: 500,
    arrows: false,
  };

  const slider = useRef<Slider>(null);

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };

  return (
    <Container>
      <SliderWrapper>
        <Slider {...settings} ref={slider}>
          {items.map((item, index) => (
            <SliderItem key={`slide-item-${index}`} onClick={() => gotoNext()}>
              <Image
                src={item.bannerImage.url}
                alt={item.bannerImage.title}
                width={item.bannerImage.width}
                height={item.bannerImage.height}
                layout="responsive"
              />
              <BannerTextWrapper>
                <BannerSubHeading>{item.bannerIntro}</BannerSubHeading>
                <BannerHeading>{item.bannerHeading}</BannerHeading>
                <BannerDescription>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.bannerSubline }}
                  />
                </BannerDescription>
              </BannerTextWrapper>
            </SliderItem>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
}

export default TopSlider;
