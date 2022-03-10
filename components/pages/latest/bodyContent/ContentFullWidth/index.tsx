import React, { useState, useEffect, useRef } from "react";
import css from "@styled-system/css";
import Container from "@components/common/layout/container";
import { TextCol } from "../styles";
import richTextRenderer from "@utils/richTextRenderer";
import { SocialWrapper, SocialItem } from "../styles";
import Text from "@components/common/typography";
import Image from "next/image";
import Link from "next/link";
import Arrow from "public/assets/icons/right-diag-arrow.svg";
import theme from "@styles/theme";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/fibonaccistone/" },
  { name: "Facebook", url: "https://www.facebook.com/FibonacciStone/" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/fibonacci-stone/",
  },
];

const ContentFullWidth = ({ content, index }) => {
  // const [windowWidth, setWindowWidth] = useState(null);
  // const [yOffset, setYOffset] = useState(0);
  // const [pageLength, setPageLength] = useState(null);
  // const [railLength, setRailLength] = useState(0);
  const { contentText } = content;
  // const firstContent = useRef(null);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // }

  // useEffect(() => {
  //   firstContent.current;
  //   setPageLength(document.body.scrollHeight);
  //   setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize, false);
  // }, []);

  // useEffect(() => {
  //   setYOffset(firstContent.current ? firstContent.current?.offsetTop : null);
  // }, [firstContent]);

  // useEffect(() => {
  //   pageLength && yOffset && setRailLength((pageLength - yOffset) - 200);
  // }, [yOffset]);

  // useEffect(() => {
  //   setPageLength(document.body.scrollHeight);
  //   setYOffset(firstContent.current ? firstContent.current?.offsetTop : null);
  //   pageLength && yOffset && setRailLength((pageLength - yOffset) - 200);
  // }, [windowWidth, pageLength, yOffset]);

  // console.log(yOffset !== null && yOffset);
  // yOffset && console.log(windowWidth);
  return (
    <Container css={css({ bg: "#FFFFF8", position: "relative" })}>
      {/* {index === 1 && <div
        css={css({
          position:'absolute',
          display: 'grid',
          top: 120,
          gridColumn: 1,
          height: railLength > 0 && railLength,
          overflow: 'none',
        })}
      > */}
      {index === 1 && (
        <SocialWrapper>
          <Text
            variant="Body-Regular"
            css={css({ color: theme.colors.concrete })}
          >
            Follow Us
          </Text>
          {socials.map((platform) => {
            return (
              <SocialItem key={platform.name}>
                <Link href={platform.url}>{platform.name}</Link>
                <Image
                  src={Arrow}
                  width={14}
                  height={14}
                  alt=""
                  layout="fixed"
                />
              </SocialItem>
            );
          })}
        </SocialWrapper>
      )}
      {/* </div>} */}
      <TextCol>{richTextRenderer(contentText)}</TextCol>
    </Container>
  );
};
export default ContentFullWidth;
