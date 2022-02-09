import React, { useEffect, useState } from "react";
import Text from "@components/common/typography";
import { LeftCol, RightCol, SahreLinkWrapper } from "./styles";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";
import Link from "next/link";
import Arrow from "@components/common/icons/arrow";

const FollowSection = () => {
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
        <Text as="h1" variant="Display-Medium">
          Display Header laoreet pulvinar velit sit
        </Text>
        <Text as="h2" variant="Display-Small">
          Section heading laoreet pulvinar velit sit posuere enim
        </Text>
        <Text as="h3" variant="Body-Large">
          Sub heading
        </Text>

        <Text as="h5" variant="Body-Large">
          Paragraph reet pulvinar velit sit posuere enim, amet erat. Vel et, ut
          pellentesque neque, risus. Lacus, auctor quis feugiat pellentesque
          scelerisque velit mattis. Arcu amet purus fusce lectus. Nisl, proin
          blandit amet, mattis bibendum sed <br></br> <br></br> Nulla at sit sed
          tellus tincidunt vulputate. Scelerisque ullamcorper scelerisque amet,
          risus, semper sed eget semper orci. Dolor ultricies donec id metus
          tempus hac proin. Diam dolor eget ut augue mauris consequat. Tristique
          nisi, lacus mi viverra egestas vel tristique. Penatibus tortor odio
          lacus amet, etiam cras non augue sit. Dignissim nunc, scelerisque sed
          neque, quis et. Purus{" "}
        </Text>
      </RightCol>
    </Container>
  );
};
export default FollowSection;
