import Image from "next/image";
import css from "@styled-system/css";
import { ImageLeft, ImageRight } from "./styles";
import Container from "@components/common/layout/container";

const TwoColsImageBlock = ({
  component,
  backgroundColor,
  hasPadding = false,
  hasBottomPadding = false,
}) => {
  const cssProps: any = {
    bg: backgroundColor ? backgroundColor : "#FFFFF8",
  };
  if (hasPadding) {
    cssProps.py = 120;
  }
  if (hasBottomPadding) {
    cssProps.pb = 120;
  }
  return (
    <Container
      css={css({ py: 120, bg: backgroundColor ? backgroundColor : "#FFFFF8" })}
    >
      {component?.image1Thumb?.[0]?.url && (
        <ImageLeft>
          <Image
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
