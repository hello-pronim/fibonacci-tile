import Image from "next/image";
import { HeroImageContainer } from "../hero/styles";

const HeroImage = ({ component }) => {
  return (
    <>
      <HeroImageContainer>
        <Image
          className="image"
          placeholder="blur"
          blurDataURL={component?.blurThumb[0]?.url}
          src={component?.image[0]?.url}
          alt={component?.image[0]?.title}
          width={component?.image[0]?.width}
          height={component?.image[0]?.height}
          objectFit="cover"
          layout="responsive"
        />
      </HeroImageContainer>
    </>
  );
};
export default HeroImage;
