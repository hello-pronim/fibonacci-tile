import Image from "next/image";
import { ContentWrapper, SlideImage, SlideImageMobile } from "../styles";

const BannerType1 = ({ banner }) => {
  return (
    <>
      <SlideImage>
        <Image
          className="lrg-img"
          layout="responsive"
          src={banner.image1[0].url}
          alt={banner.image1[0].title}
          width={banner.image1[0].width}
          height={banner.image1[0].height}
        />
        <Image
          className="lrg-img"
          layout="responsive"
          src={banner.image2[0].url}
          alt={banner.image2[0].title}
          width={banner.image2[0].width}
          height={banner.image2[0].height}
        />
      </SlideImage>
      {banner.likeNoOtherText && (
        <ContentWrapper>
          <span>LIKE</span>
          <span>NO</span>
          <span>OTHER</span>
        </ContentWrapper>
      )}
    </>
  );
};

export default BannerType1;
