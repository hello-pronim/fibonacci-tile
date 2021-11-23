import { Container, ImageWrapper, TextWrapper } from "./styles";
import Text from "@componentscommon/typography";
import Image from "next/image";
import Ig1 from "public/assets/temp/ig-1.png";
import Ig2 from "public/assets/temp/ig-2.png";
import AccentText from "@components/common/accentText";

const SocialModule = () => {
  return (
    <Container>
      <AccentText top={120}>From our community</AccentText>
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
      <TextWrapper>
        <Text Base="p" variant="Body-Small">
          Tag <a href="#">#fibonacci</a> or <a href="#">#likenoother</a> in your
          post for your chance to be featured
        </Text>
      </TextWrapper>
    </Container>
  );
};

export default SocialModule;
