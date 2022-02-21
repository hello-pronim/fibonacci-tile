import Image from "next/image";
import { HeroImageContainer } from "../hero/styles";

const HeroImage = ({ component }) => {
  return (
    <>
      <HeroImageContainer>
        <Image
          placeholder="blur"
          blurDataURL={component?.blurThumb[0]?.url}
          src={component?.image[0]?.url}
          alt={component?.image[0]?.title}
          width={component?.image[0]?.width}
          height={component?.image[0]?.height}
        />
      </HeroImageContainer>
    </>
  );
};
export default HeroImage;
