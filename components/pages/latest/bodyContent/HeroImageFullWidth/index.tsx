import Image from "next/image";
import { FwWrapper } from "../styles";

const HeroImageFullWidth = ({ image, blurThumb }) => {
  return (
    <FwWrapper>
      <Image
        placeholder="blur"
        blurDataURL={blurThumb.url}
        alt={image.title}
        src={image.url}
        layout="responsive"
        width="1920"
        height="1080"
      />
    </FwWrapper>
  );
};

export default HeroImageFullWidth;
