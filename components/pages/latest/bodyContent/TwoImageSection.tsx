import React from "react";
import Text from "@components/common/typography";
import { ImageLeft, ImageRight } from "./styles";
import Image from "next/image";

import Container from "@components/common/layout/container";
import ContPic2 from "public/assets/latest-news/single-page/single-page2.png";

import css from "@styled-system/css";

const TwoImageSection = () => {
  return (
    <div css={css({ py: 120 })}>
      <Container css={css({ bg: "#FFFFF8" })}>
        <ImageLeft>
          <Image
            alt=""
            src={ContPic2}
            objectFit="cover"
            layout="intrinsic"
            width="710"
            height="820"
          ></Image>
        </ImageLeft>
        <ImageRight>
          <Image alt="" src={ContPic2} width="710" height="820" />
        </ImageRight>
      </Container>
      <Container css={css({ bg: "#FFFFF8" })}>
        <ImageLeft css={css({ alignItems: "center", display: "flex" })}>
          <Text variant="Body-Small" css={css({ mt: 16, mr: 40 })} altFont>
            Lucia Braham
          </Text>
          <Text variant="Body-Small" css={css({ mt: 16 })} altFont>
            Build by Green Anvil Co
          </Text>
        </ImageLeft>
      </Container>
    </div>
  );
};
export default TwoImageSection;
