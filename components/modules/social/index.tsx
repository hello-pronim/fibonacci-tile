import css from "@styled-system/css";
import Image from "next/image";
import Ig1 from "public/assets/temp/ig-1.jpg";
import Ig2 from "public/assets/temp/ig-2.jpg";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import { Container, ImageWrapper } from "./styles";

const SocialModule = () => {
  return (
    <Container>
      <AccentText top={120}>From our community</AccentText>
      <AccentTextMobile css={css({ pb: 80 })}>
        From our community
      </AccentTextMobile>
      <ImageWrapper>
        <Image alt="" src={Ig1} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig2} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig1} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig2} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig1} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig2} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig1} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig2} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig1} width={292} height={292} layout="fixed" />
        <Image alt="" src={Ig2} width={292} height={292} layout="fixed" />
      </ImageWrapper>
      {/* <TextWrapper>
        <Text as="p" variant="Body-Small">
          Tag <a href="#">#fibonacci</a> or <a href="#">#likenoother</a> in your
          post for your chance to be featured
        </Text>
      </TextWrapper> */}
    </Container>
  );
};

export default SocialModule;
