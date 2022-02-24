import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import Text from "@components/common/typography";
import css from "@styled-system/css";
import Container from "@components/common/layout/container";
import { LeftCol, RightCol, SahreLinkWrapper } from "../styles";
import Arrow from 'public/assets/icons/right-diag-arrow.svg';
import theme from "@styles/theme";

const FirstContentSection = ({ content }) => {
  const useWidth = () => {
    if (process.browser) {
      const [width, setWidth] = useState(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [width]);
      return width;
    }
    return 0;
  };
  
  return (
    <Container css={css({ bg: "#FFFFF8", pt: 120 })}>
      <LeftCol>
            <Text variant="Body-Regular" css={css({color: theme.colors.concrete})}>Follow Us</Text>
            <SahreLinkWrapper>
              <Link href="https://www.instagram.com/fibonaccistone/">Instagram</Link>
              <Image src={Arrow} width={14} height={14} alt="" layout="fixed"/>
            </SahreLinkWrapper>

            <SahreLinkWrapper>
              <Link href="https://www.facebook.com/login">Facebook</Link>
              <Image src={Arrow} width={14} height={14} alt="" layout="fixed"/>
            </SahreLinkWrapper>

            <SahreLinkWrapper>
              <Link href="https://www.linkedin.com/">Linkedin</Link>
              <Image src={Arrow} width={14} height={14} alt="" layout="fixed"/>
            </SahreLinkWrapper>

      </LeftCol>
      <RightCol>
        <Text variant="Body-Large" dangerouslySetInnerHTML={{ __html: content }} />
      </RightCol>
    </Container>
  );
};
export default FirstContentSection;
