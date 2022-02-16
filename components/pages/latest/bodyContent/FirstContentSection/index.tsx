import React, { useEffect, useState } from "react";
import Link from "next/link";
import css from "@styled-system/css";
import Container from "@components/common/layout/container";
import Arrow from "@components/common/icons/arrow";
import { LeftCol, RightCol, SahreLinkWrapper } from "../styles";

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
  const windowWidth = useWidth();
  return (
    <Container css={css({ bg: "#FFFFF8", pt: 120 })}>
      <LeftCol>
        {windowWidth > 768 ? (
          <div>
            <SahreLinkWrapper>
              <Link href="https://www.instagram.com/">Instagram</Link>
              <Arrow type="short" direction="right" />
            </SahreLinkWrapper>

            <SahreLinkWrapper>
              <Link href="https://www.facebook.com/login">Facebook</Link>
              <Arrow type="short" direction="right" />
            </SahreLinkWrapper>

            <SahreLinkWrapper>
              <Link href="https://www.linkedin.com/">Linkedin</Link>
              <Arrow type="short" direction="right" />
            </SahreLinkWrapper>
          </div>
        ) : null}
      </LeftCol>
      <RightCol>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </RightCol>
    </Container>
  );
};
export default FirstContentSection;
