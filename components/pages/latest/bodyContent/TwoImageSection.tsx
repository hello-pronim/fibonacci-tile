import React, { useEffect, useState } from "react";
import Text from "@components/common/typography";
import {
  FwWrapper,
  LeftCol,
  RightCol,
  ImageLeft,
  ImageRight,
  TextCol,
  Ol,
  Ul,
  Wrapper,
  SahreLinkWrapper,
} from "./styles";
import Image from "next/image";
import ZunicaFull from "public/assets/temp/nelsons-1.jpg";
import Nelsons2 from "public/assets/temp/nelsons-2.jpg";
import Nelsons3 from "public/assets/temp/nelsons-3.jpg";
import Plant from "public/assets/temp/plant.jpg";
import Bench from "public/assets/temp/bench.jpg";
import ProjectFull from "public/assets/temp/zunica-full-2.jpg";
import ProjHalf1 from "public/assets/temp/proj-half-1.jpg";
import ProjHalf2 from "public/assets/temp/proj-half-2.jpg";
import Container from "@components/common/layout/container";
import ContPic1 from "public/assets/latest-news/single-page/single-page1.png";
import ContPic2 from "public/assets/latest-news/single-page/single-page2.png";
import ContPic3 from "public/assets/latest-news/single-page/single-page3.png";

import css from "@styled-system/css";
import Link from "next/link";
import Arrow from "@components/common/icons/arrow";
import theme from "@styles/theme";
import { display, justifyContent } from "styled-system";
import { LinkWrapper } from "../styles";
import TextSection from "./TextSection";
import FollowSection from "./FollowSection";

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
