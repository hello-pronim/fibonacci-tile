import React from "react";
import Text from "@components/common/typography";
import { ImageLeft, ImageRight } from "./styles";
import Image from "next/image";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const ImageRightTextLeft = ({ component, backgroundColor }) => {
  return (
    <Container css={css({ py: 120, bg: backgroundColor ? backgroundColor : "#FFFFF8" })}>
      { component?.headline && 
      <ImageLeft css={css({alignItems: 'center'})}>
        <Text variant="Display-Medium" css={css({ mt: 16 })} altFont dangerouslySetInnerHTML={{__html: component.headline}} />
      </ImageLeft>
      }
      {component?.image?.length > 0 && 
      <ImageRight>
        <Image
          alt="img"
          src={component.image[0].url}
          width={component.image[0].width}
          height={component.image[0].height}
          // layout="fixed"
          // objectFit="cover"
        ></Image>
      </ImageRight>
      }
    </Container>
  );
};
export default ImageRightTextLeft;
