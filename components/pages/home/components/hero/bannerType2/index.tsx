import Image from "next/image";
import { ContentWrapper, SlideImage2 } from "../styles";

const BannerType1 = ({ banner }) => {
  return (
    <>
      <SlideImage2>
        <div>
          <Image
            className="lrg-img"
            layout="responsive"
            placeholder="blur"
            blurDataURL={banner.blurThumb1[0].url}
            src={banner.sliderImage1[0].url}
            alt={banner.sliderImage1[0].title}
            width={banner.sliderImage1[0].width}
            height={banner.sliderImage1[0].height}
          />
        </div>
        <div>
          <Image
            className="lrg-img"
            layout="responsive"
            placeholder="blur"
            blurDataURL={banner.blurThumb2[0].url}
            src={banner.sliderImage2[0].url}
            alt={banner.sliderImage2[0].title}
            width={banner.sliderImage2[0].width}
            height={banner.sliderImage2[0].height}
          />
        </div>
      </SlideImage2>
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
