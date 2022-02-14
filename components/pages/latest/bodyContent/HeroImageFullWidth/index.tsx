import Image from "next/image";
import { FwWrapper } from "../styles";

const HeroImageFullWidth = ({ image }) => {
  return (
    <FwWrapper>
      <Image
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
