import Image from "next/image";
import { ContentWrapper, SlideImage } from "../styles";

const BannerType1 = ({ banner }) => {
  return (
    <>
      <SlideImage>
        <Image
          className="lrg-img"
          layout="responsive"
          src={banner.imageRight[0].url}
          alt={banner.imageRight[0].title}
          width={banner.imageRight[0].width}
          height={banner.imageRight[0].height}
        />
      </SlideImage>
      {banner.heading && (
        <ContentWrapper>
          {banner.heading}
          {banner.subline}
          {/* {banner.button}
          {banner.buttonUrl[0].slug} */}
        </ContentWrapper>
      )}
    </>
  );
};

export default BannerType1;
