import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "public/banner1.jpg";
import {
  SliderWrapper,
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
          <div className="slide-item">
            <Image src={Slide1} alt="image-1" />
          </div>
          <div className="slide-item">
            <Image src={Slide1} alt="image-1" />
          </div>
      </Slider>
    </SliderWrapper>
  );
}

export default TopSlider;
