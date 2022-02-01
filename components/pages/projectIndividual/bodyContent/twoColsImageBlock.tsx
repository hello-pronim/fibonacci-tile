import React from "react";
import { ImageLeft, ImageRight } from "./styles";
import Image from "next/image";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const TwoColsImageBlock = ({ component, backgroundColor }) => {
  return (
    <Container css={css({ py: 120, bg: backgroundColor ? backgroundColor : "#FFFFF8" })}>
      {component?.image1?.length > 0 && 
      <ImageLeft>
        <Image
        alt="img1"
        src={component.image1[0].url}
        // objectFit="cover"
        // layout="intrinsic"
        width={component.image1[0].width}
        height={component.image1[0].height}
        ></Image>
      </ImageLeft>
      }
      {component?.image2?.length > 0 && 
      <ImageRight>
        <Image alt="img2"  
        src={component.image2[0].url}
        width={component.image2[0].width}
        height={component.image2[0].height}
        ></Image>
      </ImageRight>
      }
    </Container>
  );
};
export default TwoColsImageBlock;
