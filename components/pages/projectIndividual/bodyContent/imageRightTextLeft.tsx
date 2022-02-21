import React from "react";
import Text from "@components/common/typography";
import { ImageLeft, ImageRight } from "./styles";
import Image from "next/image";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const ImageRightTextLeft = ({
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
      {component?.headline && (
        <ImageLeft css={css({ alignItems: "center" })}>
          <Text
            variant="Display-Medium"
            css={css({ mt: 16 })}
            altFont
            dangerouslySetInnerHTML={{ __html: component.headline }}
          />
        </ImageLeft>
      )}
      {component?.imageThumb?.[0]?.url && (
        <ImageRight>
          <Image
            placeholder="blur"
            blurDataURL={component.blurThumb[0].url}
            alt={component.imageThumb[0].title}
            src={component.imageThumb[0].url}
            width={component.imageThumb[0].width}
            height={component.imageThumb[0].height}
          />
        </ImageRight>
      )}
    </Container>
  );
};

export default ImageRightTextLeft;
