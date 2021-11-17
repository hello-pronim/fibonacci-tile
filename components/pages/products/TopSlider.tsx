import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "public/banner1.jpg";
import {
  SliderWrapper,
  SlideItem,
  BannerTextWrapper,
  BannerSubHeading,
  BannerHeading,
  BannerDescription
} from "./styles";

function TopSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
          <SlideItem>
            <Image src={Slide1} alt="image-1" />
            <BannerTextWrapper>
              <BannerSubHeading>VIEW OUR</BannerSubHeading>
              <BannerHeading>Terrazzo</BannerHeading>
              <BannerDescription>
                40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built.
              </BannerDescription>
            </BannerTextWrapper>
          </SlideItem>
          <SlideItem>
            <Image src={Slide1} alt="image-1" />
            <BannerTextWrapper>
              <BannerSubHeading>VIEW OUR</BannerSubHeading>
              <BannerHeading>Collection</BannerHeading>
              <BannerDescription>
                Explore
              </BannerDescription>
            </BannerTextWrapper>
          </SlideItem>
      </Slider>
    </SliderWrapper>
  );
}

export default TopSlider;
