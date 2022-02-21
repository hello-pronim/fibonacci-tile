import Image from "next/image";
import css from "@styled-system/css";
import Container from "@components/common/layout/container";
import { ImageLeft, ImageRight } from "./styles";

const TwoColsImageBlock = ({
  component,
  backgroundColor,
  pt = 60,
  pb = 60,
}) => {
  const cssProps: any = {
    bg: backgroundColor ? backgroundColor : "#FFFFF8",
    pt,
    pb,
  };
  return (
    <Container css={css(cssProps)}>
      {component?.image1Thumb?.[0]?.url && (
        <ImageLeft>
          <Image
            placeholder="blur"
            blurDataURL={component.blurThumb1[0].url}
            objectFit="cover"
            objectPosition="100% 0"
            alt={component.image1Thumb[0].title}
            src={component.image1Thumb[0].url}
            width={component.image1Thumb[0].width}
            height={component.image1Thumb[0].height}
          ></Image>
        </ImageLeft>
      )}
      {component?.image2Thumb?.[0]?.url && (
        <ImageRight>
          <Image
            placeholder="blur"
            blurDataURL={component.blurThumb2[0].url}
            objectFit="cover"
            objectPosition="100% 0"
            alt={component.image2Thumb[0].title}
            src={component.image2Thumb[0].url}
            width={component.image2Thumb[0].width}
            height={component.image2Thumb[0].height}
          ></Image>
        </ImageRight>
      )}
    </Container>
  );
};
export default TwoColsImageBlock;
