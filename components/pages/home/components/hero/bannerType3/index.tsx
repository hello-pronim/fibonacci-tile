import Image from "next/image";
import {
  SlideItem,
  ContentWrapper,
  SlideImage,
  SlideImageMobile,
} from "../styles";

const BannerType1 = ({ banner }) => {
  return (
    <SlideItem>
      <SlideImage>
        <Image
          className="lrg-img"
          src={banner.url}
          alt=""
          layout="responsive"
          width="1920"
          height="880"
        />
      </SlideImage>
      <SlideImageMobile>
        <Image
          src={banner.url}
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
  );
};

export default BannerType1;
