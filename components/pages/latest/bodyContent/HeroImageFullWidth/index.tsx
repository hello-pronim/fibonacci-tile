import Image from "next/image";
import css from '@styled-system/css';
import { FwWrapper } from "../styles";

const HeroImageFullWidth = ({ content, index }) => {
  const image = content.imageThumb[0];
  const blurThumb = content.blurThumb[0];
  return (
    <FwWrapper css={css({ bg: "#FFFFF8" })}>
      <Image
        placeholder="blur"
        blurDataURL={blurThumb.url}
        alt={image.title}
        src={image.url}
        layout="responsive"
        objectFit="cover"
        width={image.width}
        height={image.height}
      />
    </FwWrapper>
  );
};

export default HeroImageFullWidth;
